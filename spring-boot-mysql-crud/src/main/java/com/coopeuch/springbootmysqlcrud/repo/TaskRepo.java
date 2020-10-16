package com.coopeuch.springbootmysqlcrud.repo;

import com.coopeuch.springbootmysqlcrud.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepo extends JpaRepository<Task, Long> {

}
