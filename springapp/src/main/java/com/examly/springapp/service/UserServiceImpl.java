package com.examly.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepo;

@Service
public class UserServiceImpl {

    @Autowired
    UserRepo userRepo;


    public User getUserById(Long userId){
        if(userRepo.existsById(userId)){
            return userRepo.findById(userId).get();
        }
        return null;
    }
    
}