package com.example.ecommercespring.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class DetailsCommande implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JoinColumn(name = "idCommande", referencedColumnName = "id")
    @ManyToOne
    @JsonIgnore
    private Commande commande;


    private int product;

    private int qte;

    public DetailsCommande(int product, int qte) {
        this.product = product;
        this.qte = qte;
    }

    public int getQte() {
        return qte;
    }

    public void setQte(int qte) {
        this.qte = qte;
    }

    public DetailsCommande() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Commande getCommande() {
        return commande;
    }

    public void setCommande(Commande commande) {
        this.commande = commande;
    }

    public int getProduct() {
        return product;
    }

    public void setProduct(int produit) {
        this.product = produit;
    }
}
