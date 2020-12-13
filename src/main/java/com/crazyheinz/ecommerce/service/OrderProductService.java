package com.crazyheinz.ecommerce.service;

import com.crazyheinz.ecommerce.model.OrderProduct;
import org.springframework.context.annotation.Bean;
import org.springframework.validation.annotation.Validated;


public interface OrderProductService {

    OrderProduct create(OrderProduct orderProduct);
}
