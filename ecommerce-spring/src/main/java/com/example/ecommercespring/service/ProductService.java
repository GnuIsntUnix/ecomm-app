package com.example.ecommercespring.service;

import com.example.ecommercespring.model.Product;
import com.example.ecommercespring.model.ProductResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.util.List;

@Service
public class ProductService {

    private final WebClient url = WebClient.builder()
            .baseUrl("https://dummyjson.com")
            .build();

    public List<Product> getProducts(){
        Flux<ProductResponse> clientFlux = url.get()
                .uri("/products")
                .retrieve()
                .bodyToFlux(ProductResponse.class);

        return clientFlux.single().block().getProducts();
    }

    public Product getProductById(int id){
        Flux<Product> clientFlux = url.get()
                .uri("/products" + id)
                .retrieve()
                .bodyToFlux(Product.class);

        return clientFlux.single().block();
    }
}
