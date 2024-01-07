package com.example.ecommercespring.service;

import com.example.ecommercespring.model.Client;
import com.example.ecommercespring.model.Commande;
import com.example.ecommercespring.repo.CommandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommandeService {

    @Autowired
    private CommandeRepository commandeRepository;

    public void addCommande(Commande c){
        this.commandeRepository.save(c);
    }

    public void deleteCommande(int id){
        this.commandeRepository.deleteById(id);
    }

    public void updateCommande(Commande c) {
        this.commandeRepository.save(c);
    }

    public List<Commande> getCommandesByClient(int id){
        return this.commandeRepository.getCommandesByClient_Id(id);
    }
}
