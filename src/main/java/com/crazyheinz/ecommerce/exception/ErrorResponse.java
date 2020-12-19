package com.crazyheinz.ecommerce.exception;


import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ErrorResponse {

    private List<ErrorItem> errorList = new ArrayList<>();

    public void addError(ErrorItem errorItem) {
        errorList.add(errorItem);
    }

}
