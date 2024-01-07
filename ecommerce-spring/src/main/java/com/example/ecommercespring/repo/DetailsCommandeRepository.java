package com.example.ecommercespring.repo;

import com.example.ecommercespring.model.DetailsCommande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DetailsCommandeRepository extends JpaRepository<DetailsCommande, Integer> {
    List<DetailsCommande> getDetailsCommandesByCommande_Id(int id);
}
