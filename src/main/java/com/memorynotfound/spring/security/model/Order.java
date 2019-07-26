package com.memorynotfound.spring.security.model;


import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String userName;
    private String orderDate;
    private String products;
    private String lastPrice;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public String getProducts() {
        return products;
    }

    public void setProducts(String products) {
        this.products = products;
    }

    public String getLastPrice() {
        return lastPrice;
    }

    public void setLastPrice(String lastPrice) {
        this.lastPrice = lastPrice;
    }

    @Override
    public String toString() {
        return "Order{" +
                "userName='" + userName + '\'' +
                ", orderDate='" + orderDate + '\'' +
                ", products='" + products + '\'' +
                ", lastPrice='" + lastPrice + '\'' +
                '}';
    }
}
