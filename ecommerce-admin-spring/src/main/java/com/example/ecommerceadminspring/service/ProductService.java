package com.example.ecommerceadminspring.service;

import com.example.ecommerceadminspring.model.Product;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.util.List;

@Service
public class ProductService {

    private final WebClient url = WebClient.builder()
            .baseUrl("https://dummyjson.com")
            .build();

    public Product getProductById(int id){
        Flux<Product> clientFlux = url.get()
                .uri("/products/" + id)
                .retrieve()
                .bodyToFlux(Product.class);

        return clientFlux.single().block();
    }
}
