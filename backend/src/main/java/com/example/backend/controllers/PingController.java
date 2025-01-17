package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.utils.ResponseGen;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping("/api/ping")
public class PingController {
    
    @GetMapping
    public ResponseEntity<ResponseGen> ping() {
        return  ResponseEntity.ok(
            ResponseGen
            .builder()
            .success(true)
            .message("Ping successful")
            .data(null)
            .build()
            );
    }
    
}
