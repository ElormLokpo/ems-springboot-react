package com.example.backend.services;

import java.util.Collection;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.daos.EmployeeDao;
import com.example.backend.dtos.employee.CreateEmployeeDto;
import com.example.backend.dtos.employee.GetEmployeesDto;
import com.example.backend.model.employee.EmployeeModel;
import com.example.backend.repositories.EmployeeRepository;

@Service
public class EmployeeService implements EmployeeDao {

    EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public GetEmployeesDto EmployeeToGetEmployeeDto(EmployeeModel employee) {
        return GetEmployeesDto.builder()
                .id(employee.getId())
                .firstName(employee.getFirstName())
                .lastName(employee.getLastName())
                .email(employee.getEmail())
                .gender(employee.getGender())
                .jobTitle(employee.getJobTitle())
                .department(employee.getDepartment())
                .employeeType(employee.getEmployeeType())
                .hireDate(employee.getHireDate())
                .salaryAmount(employee.getSalaryAmount())
                .salaryCurrency(employee.getSalaryCurrency())
                .employeeStatus(employee.getEmployeeStatus())
                .supervisorName(employee.getSupervisorName())
                .build();
    }

    public EmployeeModel CreateEmployeeDtoToEmployee(CreateEmployeeDto employee) {
        return EmployeeModel.builder()
                .firstName(employee.getFirstName())
                .lastName(employee.getLastName())
                .email(employee.getEmail())
                .phone(employee.getPhone())
                .dateOfBirth(employee.getDateOfBirth())
                .gender(employee.getGender())
                .countryOfResidence(employee.getCountryOfResidence())
                .cityOfResidence(employee.getCityOfResidence())
                .digitalAddress(employee.getDigitalAddress())
                .nationality(employee.getNationality())
                .jobTitle(employee.getJobTitle())
                .department(employee.getDepartment())
                .jobDescription(employee.getJobDescription())
                .employeeType(employee.getEmployeeType())
                .hireDate(employee.getHireDate())
                .terminationDate(employee.getTerminationDate())
                .salaryAmount(employee.getSalaryAmount())
                .salaryCurrency(employee.getSalaryCurrency())
                .salaryFrequency(employee.getSalaryFrequency())
                .benefits(employee.getBenefits())
                .employeeStatus(employee.getEmployeeStatus())
                .supervisorName(employee.getSupervisorName())
                .supervisorEmail(employee.getSupervisorEmail())
                .build();
    }

    @Override
    public Collection<GetEmployeesDto> getAllEmployees() {
        Collection<EmployeeModel> employees = employeeRepository.findAll();
        return employees.stream().map(employee -> EmployeeToGetEmployeeDto(employee)).collect(Collectors.toList());
    }

    @Override
    public Optional<EmployeeModel> getEmployee(UUID id) {
        return employeeRepository.findById(id);
    }

    @Override
    public Boolean createEmployee(CreateEmployeeDto employee) {
        employeeRepository.save(CreateEmployeeDtoToEmployee(employee));
        return true;
    }

    @Override
    public Boolean deleteEmployee(UUID id) {
        employeeRepository.deleteById(id);
        return true;
    }

}
