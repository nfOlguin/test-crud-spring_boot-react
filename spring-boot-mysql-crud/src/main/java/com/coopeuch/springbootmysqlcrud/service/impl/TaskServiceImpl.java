package com.coopeuch.springbootmysqlcrud.service.impl;

import com.coopeuch.springbootmysqlcrud.model.Task;
import com.coopeuch.springbootmysqlcrud.repo.TaskRepo;
import com.coopeuch.springbootmysqlcrud.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepo taskRepo;

    @Override
    public Task save(Task task) {
        return taskRepo.save(task);
    }
}
