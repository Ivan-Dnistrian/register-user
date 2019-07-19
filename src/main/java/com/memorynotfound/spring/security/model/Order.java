package com.memorynotfound.spring.security.model;


import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Date order_date;
    private double last_price;
    private int user_id;
    private int product_id;
}
