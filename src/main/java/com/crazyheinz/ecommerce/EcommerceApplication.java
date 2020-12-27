package com.crazyheinz.ecommerce;

import com.crazyheinz.ecommerce.model.Product;
import com.crazyheinz.ecommerce.model.User;
import com.crazyheinz.ecommerce.repository.UserRepository;
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
            productService.save(new Product(1L, "iPhone", 800.0, "http://placehold.it/200x100"));
            productService.save(new Product(2L, "iPad", 1200.0, "http://placehold.it/200x100"));
            productService.save(new Product(3L, "iMac", 2000.0, "http://placehold.it/200x100"));
            productService.save(new Product(4L, "Macie pro", 2000.0, "http://placehold.it/200x100"));
            productService.save(new Product(5L, "airpods", 300.0, "http://placehold.it/200x100"));
        };
    }

    @Bean
    CommandLineRunner init(UserRepository userRepository) {
        return args -> {
            User hannes = new User.Builder()
                .withName("Hannes")
                .withEmail("hannesdb@hotmail.com")
                .withPassword("password")
                .build();
            userRepository.save(hannes);

            User monika = new User.Builder()
                .withName("Monika")
                .withEmail("monika@hotmail.com")
                .withPassword("password")
                .build();
            userRepository.save(hannes);
            userRepository.save(monika);
        };
    }

}
