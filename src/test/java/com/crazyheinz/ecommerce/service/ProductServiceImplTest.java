package com.crazyheinz.ecommerce.service;

import com.crazyheinz.ecommerce.model.Product;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.inject.Inject;
import javax.persistence.EntityManager;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class ProductServiceImplTest {

    @Inject
    ProductServiceImpl productService;
    @Inject
    private EntityManager entityManager;

    @Test
    void getAllProducts() {
    }

    @Test
    void save() {
        Product expected = productService.save(Product.builder()
            .withId(1L)
            .withName("iPhone")
            .withPictureUrl("http://placehold.it/200x100")
            .withPrice(500.0)
            .build());

        assertThat(entityManager.find(Product.class, expected.getId()))
            .isEqualTo(expected);

    }
}
