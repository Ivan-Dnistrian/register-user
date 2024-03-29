package com.memorynotfound.spring.security.controllers;

import com.memorynotfound.spring.security.model.Product;
import com.memorynotfound.spring.security.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RestProduct {

    @Autowired
    private ProductService productService;

    @RequestMapping(path = "/pr", method = RequestMethod.GET)
    public List<Product> getAllProducts(){
        return productService.findAll();
    }
}
