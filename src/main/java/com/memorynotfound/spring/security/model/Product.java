package com.memorynotfound.spring.security.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;

@AllArgsConstructor
@Entity
@Data
@Builder
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="product_id")
    public int product_id;
    @Column(name="product_name")
    public String product_name;
    @Column(name="price")
    public double price;
    @Column(name="category_id")
    public int category_id;

    public Product() {
    }
}
