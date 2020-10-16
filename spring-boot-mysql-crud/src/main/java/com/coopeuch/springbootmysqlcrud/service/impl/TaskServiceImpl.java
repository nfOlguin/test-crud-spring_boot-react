package com.coopeuch.springbootmysqlcrud.service.impl;

import com.coopeuch.springbootmysqlcrud.model.Task;
import com.coopeuch.springbootmysqlcrud.repo.TaskRepo;
import com.coopeuch.springbootmysqlcrud.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepo taskRepo;

    @Override
    public Task save(Task task) {
        return taskRepo.save(task);
    }

    @Override
    public Iterable<Task> findAll() {
        return taskRepo.findAll();
    }

    @Override
    public Optional<Task> findById(Long id) {
        return taskRepo.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        taskRepo.deleteById(id);
    }
}
