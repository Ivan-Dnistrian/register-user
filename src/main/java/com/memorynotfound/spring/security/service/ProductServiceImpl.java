package com.memorynotfound.spring.security.service;

import com.memorynotfound.spring.security.model.Product;
import com.memorynotfound.spring.security.repository.ProductDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductDAO productDAO;


    @Override
    public List<Product> getAllProducts() {
        return productDAO.findAll();
    }

    private Sort sortByCategoryIdAsc() {
        return new Sort(Sort.Direction.ASC, "categoryId");
    }

    @Override
    public List<Product> findAll() {
        return productDAO.findAll(sortByCategoryIdAsc());
    }



}
