package com.memorynotfound.spring.security.model;


import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;

@AllArgsConstructor
@Entity
@Data
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="user_name")
    private String userName;
    @Column(name="order_date")
    private String orderDate;
    @Column(name="products")
    private String products;
    @Column(name="last_price")
    private String lastPrice;

    public Order() {
    }
}
