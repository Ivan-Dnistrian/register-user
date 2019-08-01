package com.memorynotfound.spring.security.service;

import com.memorynotfound.spring.security.model.Order;
import com.memorynotfound.spring.security.repository.OrderDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OrderService {
    @Autowired
        OrderDAO orderDAO;
    public Iterable<Order> list() {
        return orderDAO.findAll();
    }

    public List<Order> findAll(String name) {

        return orderDAO.findByUserName(name);
    }
}
