package com.example.backend.services;

import java.util.Collection;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.daos.OrganizationDao;
import com.example.backend.dtos.organization.CreateOrganizationDto;
import com.example.backend.model.organization.OrganizationModel;
import com.example.backend.repositories.OrganizationRepository;

@Service
public class OrganizationService implements OrganizationDao {

    OrganizationRepository orgRepo;

    private OrganizationModel CreateOrgDtoToOrganization(CreateOrganizationDto organizationDto) {
        return OrganizationModel.builder()
                .name(organizationDto.getName())
                .build();
    }

    @Autowired
    public OrganizationService(OrganizationRepository orgRepo) {
        this.orgRepo = orgRepo;
    }

    @Override
    public Collection<OrganizationModel> getAllOrganizations() {
        return orgRepo.findAll();

    }

    @Override
    public Optional<OrganizationModel> getOrganization(UUID id) {
        return orgRepo.findById(id);
    }

    @Override
    public Boolean createOrganization(CreateOrganizationDto organization) {
        orgRepo.save(CreateOrgDtoToOrganization(organization));
        return true;

    }

    @Override
    public Boolean deleteOrganization(UUID id) {
        orgRepo.deleteById(id);
        return true;
    }

}
