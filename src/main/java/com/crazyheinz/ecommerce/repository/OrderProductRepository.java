package com.crazyheinz.ecommerce.repository;

import com.crazyheinz.ecommerce.model.OrderedProduct;
import com.crazyheinz.ecommerce.model.OrderedProductPK;
import org.springframework.data.repository.CrudRepository;

public interface OrderProductRepository extends CrudRepository<OrderedProduct, OrderedProductPK> {
}
