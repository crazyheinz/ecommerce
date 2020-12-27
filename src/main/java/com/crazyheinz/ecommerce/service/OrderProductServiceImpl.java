package com.crazyheinz.ecommerce.service;

import com.crazyheinz.ecommerce.model.OrderedProduct;
import com.crazyheinz.ecommerce.repository.OrderProductRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class OrderProductServiceImpl implements OrderProductService {

    private final OrderProductRepository orderProductRepository;

    public OrderProductServiceImpl(OrderProductRepository orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }

    @Override
    public OrderedProduct create(OrderedProduct orderedProduct) {
        return this.orderProductRepository.save(orderedProduct);
    }
}
