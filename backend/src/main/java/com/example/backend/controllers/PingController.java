package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.utils.ResponseGen;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


@CrossOrigin(origins="http://localhost:5173")
@RestController
public class PingController {
    
    @GetMapping("ping")
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
