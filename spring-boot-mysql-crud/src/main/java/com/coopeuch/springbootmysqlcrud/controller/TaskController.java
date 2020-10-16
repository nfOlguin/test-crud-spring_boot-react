package com.coopeuch.springbootmysqlcrud.controller;

import com.coopeuch.springbootmysqlcrud.model.Task;
import com.coopeuch.springbootmysqlcrud.repo.TaskRepo;
import com.coopeuch.springbootmysqlcrud.service.TaskService;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @Autowired
    protected ObjectMapper mapper;

    @ApiOperation(value = "Busca todas las tareas.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "tarea encontrada", response = Task.class),
            @ApiResponse(code = 401, message = "No tiene permisos para ver las tareas", response = HttpStatus.class),
            @ApiResponse(code = 404, message = "No se encontró registro de tareas", response = HttpStatus.class)})
    @GetMapping(value= "/tasks")
    public ResponseEntity<?> getAllTasks() {

        List<Task> taskList = new ArrayList<>();
        Iterable<Task> tasks = taskService.findAll();
        if(!tasks.iterator().hasNext()){
            return new ResponseEntity<>(taskList, HttpStatus.NO_CONTENT);
        }
        tasks.forEach(taskList::add);
        return new ResponseEntity<>(taskList, HttpStatus.OK);
    }


    @ApiOperation(value = "Crea una tarea.", notes = "fecha de creación registrada por el sistema")
    @ApiResponses({
            @ApiResponse(code = 200, message = "tarea encontrada", response = Task.class),
            @ApiResponse(code = 401, message = "No tiene permisos para ver las tareas", response = HttpStatus.class),
            @ApiResponse(code = 406, message = "Objeto de entrada no corresponde ", response = HttpStatus.class)})
    @PostMapping(value= "/tasks/create")
    public ResponseEntity<?> create(@RequestBody String taskJson) throws IOException {

        this.mapper = new ObjectMapper();
        Task task = this.mapper.readValue(taskJson, Task.class);
        Date dt = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String currentTime = sdf.format(dt);
        task.setFechaCreacion(currentTime);
        if (!taskIsValid(task, taskJson)) {
            return new ResponseEntity<Task>(task, HttpStatus.NOT_ACCEPTABLE);
        } else {
            taskService.save(task);
        }
        return new ResponseEntity<Task>(HttpStatus.CREATED);
    }

    @ApiOperation(value = "Obtiene una tarea por su id.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "tarea encontrada", response = Task.class),
            @ApiResponse(code = 401, message = "No tiene permisos para ver las tareas", response = HttpStatus.class),
            @ApiResponse(code = 404, message = "Tarea no encontrada ", response = HttpStatus.class)})
    @GetMapping(value = "/tasks/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") Long id) {
        Optional<Task> taskData = taskService.findById(id);
        if (!taskData.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(taskData.get(), HttpStatus.OK);
        }
    }

    @ApiOperation(value = "Actualiza una tarea.", notes = "Seleccionada por su id")
    @ApiResponses({
            @ApiResponse(code = 200, message = "tarea Actualizada", response = Task.class),
            @ApiResponse(code = 401, message = "No tiene permisos para editar las tareas", response = HttpStatus.class),
            @ApiResponse(code = 404, message = "Tarea no encontrada ", response = HttpStatus.class)})
    @PutMapping(value = "/tasks/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable("id") Long id, @RequestBody Task taskJson) {

        Optional<Task> taskData = taskService.findById(id);

        if (taskData.isPresent()) {
            Task task = taskData.get();
            task.setDescripcion(taskJson.getDescripcion());
            task.setVigente(taskJson.isVigente());

            Task updatedTask = taskService.save(task);
            return new ResponseEntity<>(updatedTask, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @ApiOperation(value = "Elimina una tarea.", notes = "Seleccionada por su id")
    @ApiResponses({
            @ApiResponse(code = 200, message = "tarea eliminada", response = Task.class),
            @ApiResponse(code = 401, message = "No tiene permisos para eliminar las tareas", response = HttpStatus.class),
            @ApiResponse(code = 404, message = "Tarea no encontrada ", response = HttpStatus.class)})
    @DeleteMapping(value= "/tasks/{id}")
    public ResponseEntity<String> deleteTask(@PathVariable("id") Long id) {
        try {
            taskService.deleteById(id);
        } catch (Exception e) {
            return new ResponseEntity<>("Error al eliminar tarea no registrada", HttpStatus.EXPECTATION_FAILED);
        }
        return new ResponseEntity<>("tarea eliminada!", HttpStatus.OK);
    }

    //validación backend de campos solicitados
    private boolean taskIsValid(Task task, String taskJson) {
        boolean valid = true;
        if (null == task.getDescripcion() || task.getDescripcion().equals("")) {
            valid = false;
        }
        return valid;
    }
}
