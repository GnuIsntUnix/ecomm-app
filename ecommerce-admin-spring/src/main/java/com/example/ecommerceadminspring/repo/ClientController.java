package com.example.ecommerceadminspring.repo;

//Gerer les clients et commandes
//Commentaires utilisateurs

import com.example.ecommerceadminspring.model.Client;
import com.example.ecommerceadminspring.model.Commande;
import com.example.ecommerceadminspring.service.ClientService;
import com.example.ecommerceadminspring.service.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.result.view.RedirectView;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping(value = "/")
    public ModelAndView getClients(Model model) {
        List<Client> clients = clientService.getClients();
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin");
        modelAndView.addObject("clients", clients);
        return modelAndView;
    }


    @GetMapping(value = "/addClient")
    public ModelAndView addClient(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("register");
        modelAndView.addObject("client", new Client());
        return modelAndView;
    }

    @PostMapping(value = "/addClient")
    public String addClient(@ModelAttribute Client client){
        clientService.registerClient(client);
        return "redirect:/clients/";
    }


    @GetMapping("/editClient/{id}")
    public ModelAndView editClient(@PathVariable("id") int id) {
        Client client = clientService.getClientById(id);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("edit");
        modelAndView.addObject("client", client);
        return modelAndView;
    }

    @PostMapping(value = "/editClient")
    public String editClient(@ModelAttribute Client client){
        String password = clientService.getClientById(client.getId()).getPassword();
        client.setPassword(password);
        clientService.editClient(client);
        return "redirect:/clients/";
    }


    @GetMapping("/deleteClient/{id}")
    public String deleteClient(@PathVariable("id") int id) {
        clientService.deleteClient(id);
        return "redirect:/clients/";
    }

    @GetMapping("/{id}/commandes")
    public ModelAndView getCommandes(@PathVariable("id") int id) {
        List<Commande> commandes = clientService.getCommandes(id);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("commands");
        modelAndView.addObject("commandes", commandes);
        return modelAndView;
    }

}
