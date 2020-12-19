package com.crazyheinz.ecommerce.controller;

import com.crazyheinz.ecommerce.model.Product;
import com.crazyheinz.ecommerce.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public @NotNull Iterable<Product> getProducts() {
        return productService.getAllProducts();
    }
}
