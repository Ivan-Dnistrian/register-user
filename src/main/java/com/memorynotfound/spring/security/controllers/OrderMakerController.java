package com.memorynotfound.spring.security.controllers;

import com.memorynotfound.spring.security.model.Order;
import com.memorynotfound.spring.security.repository.OrderDAO;
import com.memorynotfound.spring.security.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping( produces = MediaType.APPLICATION_JSON_VALUE)
public class OrderMakerController {
    @Autowired
        private OrderService orderService;
    @Autowired
         private OrderDAO orderDAO;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void getObject(@RequestBody Order order){
        orderDAO.save(order);
         System.out.println(order);
    }


        @GetMapping("/list")
     public Iterable<Order> list() {
        return orderService.list();
    }
}
