package com.crazyheinz.ecommerce.service;

import com.crazyheinz.ecommerce.model.Product;

public interface ProductService {
    Iterable<Product> getAllProducts();
    Product getProduct(long id);
    Product save(Product product);
}
