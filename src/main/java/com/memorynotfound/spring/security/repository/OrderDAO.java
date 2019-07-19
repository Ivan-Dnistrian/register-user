package com.memorynotfound.spring.security.repository;

import com.memorynotfound.spring.security.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDAO extends JpaRepository<Order,Integer> {
}
