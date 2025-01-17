package com.example.backend.model.organization;

import java.util.UUID;

import jakarta.persistence.Entity;
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
@Table(name="organization")
@Entity
@Builder
public class OrganizationModel {
    
    @Id
    @GeneratedValue
    public UUID id;
    public String name;
}
