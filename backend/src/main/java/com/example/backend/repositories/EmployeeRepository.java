package com.example.backend.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.employee.EmployeeModel;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeModel, UUID>, PagingAndSortingRepository<EmployeeModel, UUID> {}
