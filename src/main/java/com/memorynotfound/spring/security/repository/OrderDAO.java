package com.memorynotfound.spring.security.repository;

import com.memorynotfound.spring.security.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("Order")
public interface OrderDAO extends JpaRepository<Order,Integer> {
    Order findAllByUserName(String userName);
}
