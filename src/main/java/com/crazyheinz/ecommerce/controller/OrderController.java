package com.crazyheinz.ecommerce.controller;

import com.crazyheinz.ecommerce.dto.OrderForm;
import com.crazyheinz.ecommerce.dto.OrderProductDto;
import com.crazyheinz.ecommerce.exception.ResourceNotFoundException;
import com.crazyheinz.ecommerce.model.Order;
import com.crazyheinz.ecommerce.model.OrderedProduct;
import com.crazyheinz.ecommerce.service.OrderProductService;
import com.crazyheinz.ecommerce.service.OrderService;
import com.crazyheinz.ecommerce.service.ProductService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/orders/")
public class OrderController {

    ProductService productService;
    OrderService orderService;
    OrderProductService orderProductService;

    public OrderController(ProductService productService,
                           OrderService orderService,
                           OrderProductService orderProductService) {
        this.productService = productService;
        this.orderService = orderService;
        this.orderProductService = orderProductService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public @NotNull Iterable<Order> list() {
        return this.orderService.getAllOrders();
    }

    @PostMapping
    public ResponseEntity<Order> create(@RequestBody OrderForm form) {
        List<OrderProductDto> formDtos = form.getProductOrders();
        validateProductsExistence(formDtos);
        Order order = new Order();
        order.setStatus(OrderStatus.PAID);
        order = this.orderService.create(order);

        List<OrderedProduct> orderedProducts = new ArrayList<>();
        for (OrderProductDto dto : formDtos) {
            orderedProducts.add(
                orderProductService.create(
                    new OrderedProduct(
                        order,
                        productService.getProduct(dto.getProduct().getId()),
                        dto.getQuantity()
                    )
                )
            );
        }

        order.setOrderedProducts(orderedProducts);

        this.orderService.update(order);

        String uri = ServletUriComponentsBuilder
            .fromCurrentServletMapping()
            .path("/orders/{id}")
            .buildAndExpand(order.getId())
            .toString();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", uri);

        return new ResponseEntity<>(order, headers, HttpStatus.CREATED);
    }

    private void validateProductsExistence(List<OrderProductDto> orderProducts) {
        List<OrderProductDto> list = orderProducts
            .stream()
            .filter(orderProductDto -> Objects.isNull(productService.getProduct(orderProductDto
                .getProduct()
                .getId())))
            .collect(Collectors.toList());

        if (!CollectionUtils.isEmpty(list)) {
            throw new ResourceNotFoundException("Product not found");
        }
    }
}

