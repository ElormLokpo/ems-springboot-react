package com.example.backend.dtos.employee;

import java.sql.Date;
import java.util.List;

import com.example.backend.model.employee.EmployeeSalaryFrequency;
import com.example.backend.model.employee.EmployeeStatus;
import com.example.backend.model.employee.EmployeeType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateEmployeeDto {
    public String firstName;
    public String lastName;
    public String email;
    public String phone;
    public Date dateOfBirth;
    public String gender;
    public String countryOfResidence;
    public String cityOfResidence;
    public String digitalAddress;
    public String nationality;

    public String jobTitle;
    public String department;
    public String jobDescription;

    public EmployeeType employeeType;
    public Date hireDate;
    public Date terminationDate;

    public Double salaryAmount;
    public String salaryCurrency;

    public EmployeeSalaryFrequency salaryFrequency;
    public List<String> benefits;

    public EmployeeStatus employeeStatus;

    public String supervisorName;
    public String supervisorEmail;
}
