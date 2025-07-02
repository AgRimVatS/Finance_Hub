package com.examly.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.examly.springapp.exceptions.EmailAlreadyExistsException;
import com.examly.springapp.exceptions.InvalidCredentialsException;
import com.examly.springapp.exceptions.PasswordDoNotMatchException;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepo;
import com.examly.springapp.responses.ApiResponse;
import com.examly.springapp.security.JwtUtil;

@Service
public class AuthService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    private UserRepo userRepo;
    private JwtUtil jwtUtil;

    // Autowiring dependencies via constructor injection
    @Autowired
    public AuthService(UserRepo userRepo, JwtUtil jwtUtil) {
        this.userRepo = userRepo;
        this.jwtUtil = jwtUtil;
    }

    // Register a New User
    public String register(User user)throws EmailAlreadyExistsException,DataIntegrityViolationException {
        if (userRepo.findByEmail(user.getEmail()).isPresent()) {
            throw new EmailAlreadyExistsException("This email is already associated with other account.");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Encrypt password

        if(user.getUserRole()==null||user.getUserRole().isEmpty()){
            //if no role is present then by default it will be set to the user
            user.setUserRole("USER");
        }
        try {
            userRepo.save(user);
            return "User Registered Successfully";
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityViolationException(e.getMessage());
        }
    }

    // Login & Return JWT Token
    public String login(String email, String password)throws PasswordDoNotMatchException,InvalidCredentialsException {
        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new InvalidCredentialsException("Invalid Credentials"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new PasswordDoNotMatchException("Invalid Password Check your password");
        }

        System.out.println(email+" ---- "+password);

        return jwtUtil.generateToken(user)+","+user.getUserRole()+","+user.getUserId()+","+user.getUsername(); // Generate JWT token
    }
}

