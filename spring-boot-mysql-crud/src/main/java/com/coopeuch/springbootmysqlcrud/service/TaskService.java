package com.coopeuch.springbootmysqlcrud.service;

import com.coopeuch.springbootmysqlcrud.model.Task;

import java.util.Optional;

public interface TaskService {
    Task save(Task task);
    Iterable<Task> findAll();
    Optional<Task> findById(Long id);
    void deleteById(Long id);
}
