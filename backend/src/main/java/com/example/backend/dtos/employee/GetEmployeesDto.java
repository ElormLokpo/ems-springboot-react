package com.example.backend.dtos.employee;

import java.sql.Date;
import java.util.UUID;
import com.example.backend.model.employee.EmployeeStatus;
import com.example.backend.model.employee.EmployeeType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GetEmployeesDto {
    public UUID id;
    public String firstName;
    public String lastName;
    public String email;

    public String gender;

    public String jobTitle;
    public String department;

    public EmployeeType employeeType;
    public Date hireDate;
  

    public Double salaryAmount;
    public String salaryCurrency;

    public EmployeeStatus employeeStatus;

    public String supervisorName;
   

  
}
