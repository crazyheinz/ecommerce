package com.crazyheinz.ecommerce.repository;

import com.crazyheinz.ecommerce.model.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {
}
