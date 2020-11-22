package com.crazyheinz.ecommerce.dto;

import com.crazyheinz.ecommerce.model.OrderProduct;
import com.crazyheinz.ecommerce.model.Product;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.criteria.Order;

@Getter
@Setter
public class OrderProductDto {

    OrderProduct orderProduct;
    Order order;
    Product product;
    Integer quantity;
}
