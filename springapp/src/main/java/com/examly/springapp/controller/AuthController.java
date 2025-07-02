package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.exceptions.EmailAlreadyExistsException;
import com.examly.springapp.exceptions.InvalidCredentialsException;
import com.examly.springapp.exceptions.PasswordDoNotMatchException;
import com.examly.springapp.model.LoginDTO;
import com.examly.springapp.model.User;
import com.examly.springapp.responses.ApiResponse;
import com.examly.springapp.service.AuthService;

@RestController
@RequestMapping(path="/api")
public class AuthController {

    @Autowired
    private AuthService authService;

    // Register API
    @PostMapping("/register")
    public ResponseEntity<ApiResponse<String>> register(@RequestBody User user) {
        System.out.println("\n\n DBUG  :: " + user +"\n\n");
        try {
            String res = authService.register(user);
            ApiResponse<String> response = new ApiResponse<>(true, "User registered successfully", res);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (EmailAlreadyExistsException | DataIntegrityViolationException e) {
            ApiResponse<String> response = new ApiResponse<>(false, e.getMessage(), null);
            return new ResponseEntity<>(response, HttpStatus.CONFLICT);
        }  catch (Exception e) {
            ApiResponse<String> response = new ApiResponse<>(false, "An unexpected error occurred", null);
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Login API
    @PostMapping("/login")
    public ResponseEntity<ApiResponse<String>> login(@RequestBody LoginDTO loginDTO) {
        try {
            String token = authService.login(loginDTO.getEmail(), loginDTO.getPassword());
            ApiResponse<String> res = new ApiResponse<>(true, "Successfully logged in", token);
            return ResponseEntity.ok(res);
        } catch (InvalidCredentialsException e) {
            ApiResponse<String> res = new ApiResponse<>(false, e.getMessage(), null);
            return new ResponseEntity<>(res, HttpStatus.UNAUTHORIZED);
        } catch (PasswordDoNotMatchException e) {
            ApiResponse<String> res = new ApiResponse<>(false, e.getMessage(), null);
            return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            ApiResponse<String> res = new ApiResponse<>(false, "An unexpected error occurred", null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}