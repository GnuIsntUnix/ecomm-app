package com.example.ecommercespring.controller;

import com.example.ecommercespring.helpers.IdGenerator;
import com.example.ecommercespring.model.Client;
import com.example.ecommercespring.service.ClientService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;


    @GetMapping("/")
    public List<Client> getClients(){
        return this.clientService.getClients();
    }

    @GetMapping("/{id}")
    public Client getClientById(@PathVariable("id") int id){
        return this.clientService.getClientById(id);
    }

//    @GetMapping("/client")
//    public List<Client> getClientByEmail(@PathParam("email") String email){
//        return this.clientService.getClientByEmail(email);
//    }

    @GetMapping("/client/{firstname}/{lastname}")
    public Client getClientByFirstNameAndLastName(@PathVariable("firstname") String firstname, @PathVariable("lastname") String lastname){
        return this.clientService.getClientByFirstNameAndLastName(firstname, lastname);
    }

    @PostMapping(value = "/add", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void addClient(@RequestBody Client client){
        clientService.addClient(client);
    }

    @PutMapping(value="/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateClient(@RequestBody Client client){
        clientService.updateClient(client);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteClient(@PathVariable("id") int id){
        clientService.deleteClient(id);
    }

}
