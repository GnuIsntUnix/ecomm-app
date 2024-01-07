package com.example.ecommercespring.service;

import com.example.ecommercespring.model.DetailsCommande;
import com.example.ecommercespring.repo.DetailsCommandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DetailsCommandeService {


    @Autowired
    private DetailsCommandeRepository repository;

    public List<DetailsCommande> getDetailsByCommandId(int id){
        return repository.getDetailsCommandesByCommande_Id(id);
    }

}
