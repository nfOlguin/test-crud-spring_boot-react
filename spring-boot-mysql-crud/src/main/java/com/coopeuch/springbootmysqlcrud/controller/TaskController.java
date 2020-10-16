package com.coopeuch.springbootmysqlcrud.controller;

import com.coopeuch.springbootmysqlcrud.model.Task;
import com.coopeuch.springbootmysqlcrud.service.TaskService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
public class TaskController {

    @Autowired(required=true)
    private TaskService taskService;

    protected ObjectMapper mapper;

    //create - update
    @PostMapping("/saveOrUpdate")
    public ResponseEntity<?> saveOrUpdate(@RequestBody String taskJson) throws IOException {

        this.mapper = new ObjectMapper();
        Task task = this.mapper.readValue(taskJson,Task.class);

        Date dt = new Date();

        SimpleDateFormat sdf =   new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String currentTime = sdf.format(dt);
        task.setFechaCreacion(currentTime);

        if(!taskIsValid(task)){
            return new ResponseEntity<Task>(task, HttpStatus.NOT_ACCEPTABLE);
        }else{
            taskService.save(task);
        }
        return new ResponseEntity<Task>(task, HttpStatus.CREATED);
    }

    //validación backend de campos solicitados
    private boolean taskIsValid(Task task) {
        boolean valid = true;
        if(null == task.getDescripcion() || task.getDescripcion().equals("")){
            valid = false;
        }
        return valid;
    }
}
