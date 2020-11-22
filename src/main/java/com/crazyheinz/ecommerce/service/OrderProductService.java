package com.crazyheinz.ecommerce.service;

import com.crazyheinz.ecommerce.model.OrderProduct;
import org.springframework.stereotype.Service;

@Service
public interface OrderProductService {

    OrderProduct create(OrderProduct orderProduct);
}
