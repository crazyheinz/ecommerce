package com.crazyheinz.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Transient;

@Entity
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
    public class OrderedProduct {

    @EmbeddedId
    @JsonIgnore
    private OrderedProductPK pk;

    @Column(nullable = false)
    private Integer quantity;

    public OrderedProduct(Order order, Product product, Integer quantity) {
        pk = new OrderedProductPK();
        pk.setOrder(order);
        pk.setProduct(product);
        this.quantity = quantity;
    }

    @Transient
    public Product getProduct() {
        return this.pk.getProduct();
    }

    @Transient
    public Double getTotalPrice() {
        return getProduct().getPrice() * getQuantity();
    }
}

