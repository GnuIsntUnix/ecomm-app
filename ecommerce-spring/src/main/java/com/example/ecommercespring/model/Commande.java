package com.example.ecommercespring.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Commande implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(mappedBy = "commande", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DetailsCommande> detailsCommandes = new ArrayList<>();

    @JoinColumn(name = "idClient", referencedColumnName = "id")
    @ManyToOne
    @JsonIgnore
    private Client client;

    @Column(name = "date")
    private LocalDate dateCommande;

    public Commande(List<DetailsCommande> detailsCommandes, Client client, LocalDate dateCommande) {
        detailsCommandes.forEach(detailsCommande -> detailsCommande.setCommande(this));
        this.detailsCommandes = detailsCommandes;
        this.client = client;
        this.client.getCommandes().add(this);
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
