package com.example.ecommerceadminspring.service;


import com.example.ecommerceadminspring.model.Client;
import com.example.ecommerceadminspring.model.Commande;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.util.List;

@Service
public class ClientService {

    private final WebClient url = WebClient.builder()
            .baseUrl("http://localhost:4444")
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
            .build();

    public void registerClient(Client client){
        url.post()
                .uri("/clients/add")
                .bodyValue(client)
                .retrieve()
                .toEntity(Client.class)
                .subscribe(
                        responseEntity -> {
                        },
                        error -> {
                        }
                );
    }

    public void editClient(Client client){
        url.put()
                .uri("/clients/update")
                .bodyValue(client)
                .retrieve()
                .toEntity(Client.class)
                .subscribe(
                        responseEntity -> {
                        },
                        error -> {
                        }
                );
    }

    public void deleteClient(int id){
        url.delete()
                .uri("/clients/delete/{id}", id)
                .retrieve()
                .bodyToMono(Void.class)
                .block();
    }

    public List<Client> getClients(){
        Flux<Client> clientFlux = url.get()
                .uri("/clients/")
                .retrieve()
                .bodyToFlux(Client.class);

        return clientFlux.collectList().block();
    }

    public Client getClientById(int id){
        Flux<Client> clientFlux = url.get()
                .uri("/clients/"+id)
                .retrieve()
                .bodyToFlux(Client.class);

        return clientFlux.single().block();
    }

    public List<Commande> getCommandes(int idClient){
        Flux<Commande> clientFlux = url.get()
                .uri("/commandes/"+idClient)
                .retrieve()
                .bodyToFlux(Commande.class);

        return clientFlux.collectList().block();
    }

}
