package com.example.ecommercespring.repo;

import com.example.ecommercespring.model.Client;
import com.example.ecommercespring.model.Commande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommandeRepository extends JpaRepository<Commande, Integer> {
    List<Commande> getCommandesByClient_Id(int id);
}
