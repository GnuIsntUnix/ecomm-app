package com.example.ecommercespring.service;


import com.example.ecommercespring.model.Client;
import com.example.ecommercespring.repo.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getClients(){
        return this.clientRepository.findAll();
    }

    public Client getClientById(int id){
        return this.clientRepository.findById(id).get();
    }

    public void addClient(Client client){
        this.clientRepository.save(client);
    }

    public void deleteClient(int id){
        this.clientRepository.deleteById(id);
    }

    public void updateClient(Client client) {
        this.clientRepository.save(client);
    }

    public Client getClientByFirstNameAndLastName(String firstName, String lastName){
        return this.clientRepository.findByFirstNameAndLastName(firstName, lastName);
    }
}
