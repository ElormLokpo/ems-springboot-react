package com.example.backend.controllers;

import java.util.Collection;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dtos.employee.CreateEmployeeDto;
import com.example.backend.dtos.employee.GetEmployeesDto;
import com.example.backend.model.employee.EmployeeModel;
import com.example.backend.services.EmployeeService;
import com.example.backend.utils.ResponseGen;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    
    EmployeeService employeeService; 
    @Autowired
    public EmployeeController(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @GetMapping
    public ResponseEntity<ResponseGen> getAllEmployees() {
        Collection<GetEmployeesDto> employees = employeeService.getAllEmployees();
        ResponseGen response = ResponseGen.builder()
        .success(true)
        .message("All employees")
        .data(employees)
        .build();

        return ResponseEntity.ok(response);
    }
    
    @GetMapping(path="{id}")
    public ResponseEntity<ResponseGen> getEmployee(@PathVariable UUID id) {
        Optional<EmployeeModel> employee = employeeService.getEmployee(id);

        ResponseGen response = ResponseGen.builder()
        .success(true)
        .message("Employee query successful")
        .data(employee)
        .build();
        
        return employee.map(employeeS -> ResponseEntity.ok(response))
        .orElseGet(()-> ResponseEntity.status(HttpStatus.NOT_FOUND).body(
            ResponseGen.builder()
            .success(false)
            .message("Employee with id not found")
            .data(null)
            .build()
        ));
    }
    
    @PostMapping
    public ResponseEntity<ResponseGen> createEmployee(@RequestBody CreateEmployeeDto employee) {
        employeeService.createEmployee(employee);

        ResponseGen response = ResponseGen.builder()
        .success(true)
        .message("Employee created successfully")
        .data(null)
        .build();
        
        return ResponseEntity.ok(response);
    }

    @DeleteMapping(path="{id}")
    public ResponseEntity<ResponseGen> deleteEmployee(@PathVariable UUID id) {
        employeeService.deleteEmployee(id);

        ResponseGen response = ResponseGen.builder()
        .success(true)
        .message("Employee deleted successfully")
        .data(null)
        .build();
        
        return ResponseEntity.ok(response);
    }
    
}
