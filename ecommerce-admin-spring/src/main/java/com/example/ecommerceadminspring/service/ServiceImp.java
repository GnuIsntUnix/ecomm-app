package com.example.ecommerceadminspring.service;

import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;

@Component
public class ServiceImp implements IService{
    @Override
    public String afficherDate() {
        return LocalDate.now() + " " + LocalTime.now();
    }
}
