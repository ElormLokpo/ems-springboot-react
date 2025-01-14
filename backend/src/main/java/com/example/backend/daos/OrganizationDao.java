package com.example.backend.daos;

import java.util.Collection;
import java.util.Optional;
import java.util.UUID;

import com.example.backend.dtos.organization.CreateOrganizationDto;
import com.example.backend.model.organization.OrganizationModel;

public interface OrganizationDao {
    public Collection<OrganizationModel> getAllOrganizations(); 
    public Optional<OrganizationModel> getOrganization(UUID id);
    public Boolean createOrganization(CreateOrganizationDto organization);
    public Boolean deleteOrganization(UUID id);   
}
