package com.examly.springapp.exceptions;

public class UserNameAlreadyExistsException extends RuntimeException{
    public UserNameAlreadyExistsException(String message){
        super(message);
    }
}
