package com.example.ecommercespring.controller;


import com.example.ecommercespring.model.DetailsCommande;
import com.example.ecommercespring.service.DetailsCommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/details")
public class DetailsCommandeController {

    @Autowired
    private DetailsCommandeService detailsCommandeService;

    @GetMapping("/{id}")
    public List<DetailsCommande> getByCommandId(@PathVariable("id") int id){
        return detailsCommandeService.getDetailsByCommandId(id);
    }
}
