package com.crazyheinz.ecommerce.repository;

import com.crazyheinz.ecommerce.model.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ProductRepository extends CrudRepository<Product, Long> {

}
