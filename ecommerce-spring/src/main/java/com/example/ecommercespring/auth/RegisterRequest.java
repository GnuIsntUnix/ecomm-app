package com.example.ecommercespring.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {


    private String firstName, lastName, gender, username, phone, password;
    private LocalDate birthDate;

}
