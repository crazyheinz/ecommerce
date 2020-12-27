package com.crazyheinz.ecommerce.dto;

import com.crazyheinz.ecommerce.model.Product;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderProductDto {

    Product product;
    Integer quantity;
}
