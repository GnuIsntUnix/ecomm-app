package com.example.ecommercespring.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommandeRequest {

    private List<DetailsCommande> detailsCommandes;
    private int client;
    private LocalDate dateCommande;
}
