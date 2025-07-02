package com.examly.springapp.exceptions;

public class PasswordDoNotMatchException extends RuntimeException {
    public PasswordDoNotMatchException(String message){
        super(message);
    }
}
