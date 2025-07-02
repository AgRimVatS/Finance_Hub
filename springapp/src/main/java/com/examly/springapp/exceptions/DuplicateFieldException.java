package com.examly.springapp.exceptions;

public class DuplicateFieldException extends RuntimeException{
    public DuplicateFieldException(String message){
        super(message);
    }
    
}
