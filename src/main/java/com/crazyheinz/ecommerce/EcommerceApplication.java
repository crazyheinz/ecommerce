package com.crazyheinz.ecommerce;

import com.crazyheinz.ecommerce.model.Product;
import com.crazyheinz.ecommerce.service.ProductService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EcommerceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(ProductService productService) {
		return args -> {
			productService.save(new Product(1L, "iPhone", 800.0, "https://mobico.nl/wp-content/uploads/2017/11/Refurbished-iPhone-8-64GB-Space-Grey.jpg"));
			productService.save(new Product(2L, "iPad", 1200.0, "https://image.coolblue.be/max/2048x1536/products/1477086"));

		};
	}

}
