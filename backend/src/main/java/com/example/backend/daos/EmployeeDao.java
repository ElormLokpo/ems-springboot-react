package com.example.backend.daos;

import java.util.Collection;
import java.util.Optional;
import java.util.UUID;

import com.example.backend.dtos.employee.CreateEmployeeDto;
import com.example.backend.dtos.employee.GetEmployeesDto;
import com.example.backend.model.employee.EmployeeModel;

public interface EmployeeDao {
    public Collection<GetEmployeesDto> getAllEmployees();
    public Optional<EmployeeModel> getEmployee(UUID id);
    public Boolean createEmployee(CreateEmployeeDto employee);
    public Boolean deleteEmployee(UUID id);

}
