package com.example.backend.model.employee;

import java.sql.Date;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="employee")
@Builder
@Entity
public class EmployeeModel {
    
    @Id
    @GeneratedValue
    public UUID id; 
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

    @Enumerated(EnumType.STRING)
    public EmployeeType employeeType;
    public Date hireDate; 
    public Date terminationDate;

    public Double salaryAmount;
    public String salaryCurrency;
    @Enumerated(EnumType.STRING)
    public EmployeeSalaryFrequency salaryFrequency;
    public List<String> benefits;

    @Enumerated(EnumType.STRING) 
    public EmployeeStatus employeeStatus;

    public String supervisorName;
    public String supervisorEmail;

    public Date createdAt; 
    public Date updatedAt;
    
}
