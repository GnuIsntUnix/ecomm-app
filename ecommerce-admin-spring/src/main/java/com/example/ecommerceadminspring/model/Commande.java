package com.example.ecommerceadminspring.model;

import com.fasterxml.jackson.annotation.JsonIgnore;


import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


public class Commande implements Serializable {


    private int id;


    private List<DetailsCommande> detailsCommandes = new ArrayList<>();

    private Client client;


    private LocalDate dateCommande;

    public Commande(List<DetailsCommande> detailsCommandes, Client client, LocalDate dateCommande) {
        detailsCommandes.forEach(detailsCommande -> detailsCommande.setCommande(this));
        this.detailsCommandes = detailsCommandes;
        this.client = client;
        this.dateCommande = dateCommande;
    }

    public Commande() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<DetailsCommande> getDetailsCommandes() {
        return detailsCommandes;
    }

    public void setDetailsCommandes(List<DetailsCommande> detailsCommandes) {
        this.detailsCommandes = detailsCommandes;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public LocalDate getDateCommande() {
        return dateCommande;
    }

    public void setDateCommande(LocalDate dateCommande) {
        this.dateCommande = dateCommande;
    }
}
