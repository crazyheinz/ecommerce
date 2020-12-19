package com.crazyheinz.ecommerce.repository;

import com.crazyheinz.ecommerce.model.OrderProduct;
import com.crazyheinz.ecommerce.model.OrderProductPK;
import org.springframework.data.repository.CrudRepository;

public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
}
