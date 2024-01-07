package com.example.ecommercespring.controller;

import com.example.ecommercespring.model.Client;
import com.example.ecommercespring.model.Commande;
import com.example.ecommercespring.model.CommandeRequest;
import com.example.ecommercespring.service.ClientService;
import com.example.ecommercespring.service.CommandeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/commandes")
@RequiredArgsConstructor
public class CommandeController {

    @Autowired
    private CommandeService commandeService;
    @Autowired
    private ClientService clientService;

    @GetMapping("/{clientid}")
    public List<Commande> commandesByClient(@PathVariable("clientid") int id){
        return this.commandeService.getCommandesByClient(id);
    }

    @PostMapping("/add")
    public void addCommande(@RequestBody CommandeRequest commande){
        commandeService.addCommande(new Commande(commande.getDetailsCommandes(), clientService.getClientById(commande.getClient()), commande.getDateCommande()));
    }

    @PutMapping(value="/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateCommande(@RequestBody Commande commande){
        commandeService.updateCommande(commande);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCommande(@PathVariable("id") int id){
        commandeService.deleteCommande(id);
    }
}
