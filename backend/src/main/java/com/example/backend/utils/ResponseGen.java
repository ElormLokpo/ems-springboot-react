package com.example.backend.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;

@AllArgsConstructor
@Builder
public class ResponseGen {
    public Boolean success;
    public String message;
    public Object data;
}
