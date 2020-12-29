package com.crazyheinz.ecommerce.repository;

import com.crazyheinz.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
