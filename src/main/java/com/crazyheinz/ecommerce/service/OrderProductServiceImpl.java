package com.crazyheinz.ecommerce.service;

import com.crazyheinz.ecommerce.model.OrderProduct;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class OrderProductServiceImpl implements OrderProductService {

    @Override
    public OrderProduct create(OrderProduct orderProduct) {
        return null;
    }
}
