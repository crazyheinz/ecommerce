package com.crazyheinz.ecommerce.service;

import com.crazyheinz.ecommerce.model.Order;

public interface OrderService {

    Iterable<Order> getAllOrders();
    Order create(Order order);
    void update(Order order);
}
