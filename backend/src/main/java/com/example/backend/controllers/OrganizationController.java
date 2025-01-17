package com.example.backend.controllers;

import java.util.Collection;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dtos.organization.CreateOrganizationDto;
import com.example.backend.model.organization.OrganizationModel;
import com.example.backend.services.OrganizationService;
import com.example.backend.utils.ResponseGen;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;


@RestController
@RequestMapping("/api/organizations")
public class OrganizationController {

    OrganizationService orgService;

    @Autowired
    public OrganizationController(OrganizationService orgService) {
        this.orgService = orgService;
    }

    @RequestMapping(method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptions() {
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<ResponseGen> getAllOrganizations() {
        Collection<OrganizationModel> organizations = orgService.getAllOrganizations();
        ResponseGen response = ResponseGen.builder()
                .success(true)
                .message("All organizations")
                .data(organizations)
                .build();

        return ResponseEntity.ok(response);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<ResponseGen> getOrganization(@PathVariable UUID id) {
        Optional<OrganizationModel> organization = orgService.getOrganization(id);
        ResponseGen response = ResponseGen.builder()
                .success(true)
                .message("All organizations")
                .data(organization)
                .build();

        return organization.map(organizationS -> ResponseEntity.ok(response))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(

                        ResponseGen.builder()
                                .success(false)
                                .message("Organization not found")
                                .data(null)
                                .build()));
    }

    @PostMapping
    public ResponseEntity<ResponseGen> createOrganization(@RequestBody CreateOrganizationDto organization) {
        Boolean createdOrganizationStatus = orgService.createOrganization(organization);
        ResponseGen response = ResponseGen.builder()
                .success(true)
                .message("Organization created successfully")
                .data(createdOrganizationStatus)
                .build();

        return ResponseEntity.ok(response);
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<ResponseGen> deleteOrganization(@PathVariable UUID id) {
        Boolean deleteOrganizationStatus = orgService.deleteOrganization(id);
        ResponseGen response = ResponseGen.builder()
                .success(true)
                .message("All organizations")
                .data(deleteOrganizationStatus)
                .build();

        return ResponseEntity.ok(response);
    }

}
