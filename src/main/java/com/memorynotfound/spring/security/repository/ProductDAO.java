package com.memorynotfound.spring.security.repository;


import com.memorynotfound.spring.security.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("Product")
public interface ProductDAO extends JpaRepository<Product,Integer>{
}
