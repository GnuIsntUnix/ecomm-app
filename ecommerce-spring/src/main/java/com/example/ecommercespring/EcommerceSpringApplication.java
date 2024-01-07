package com.example.ecommercespring;

import com.example.ecommercespring.auth.AuthenticationService;
import com.example.ecommercespring.auth.RegisterRequest;
import com.example.ecommercespring.service.IService;
import com.example.ecommercespring.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EcommerceSpringApplication implements CommandLineRunner {

    @Autowired
    AuthenticationService authenticationService;

    @Autowired
    ProductService productService;

    public static void main(String[] args) {
        SpringApplication.run(EcommerceSpringApplication.class, args);
    }


    @Override
    public void run(String... args) throws Exception {
    }
}
