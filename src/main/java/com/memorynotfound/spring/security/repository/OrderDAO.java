package com.memorynotfound.spring.security.repository;

import com.memorynotfound.spring.security.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("Order")
public interface OrderDAO extends JpaRepository<Order,Integer> {
    Order findAllByUserName(String userName);
     List<Order> findByUserName(String userName);

}
