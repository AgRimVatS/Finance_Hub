package com.examly.springapp.model;

import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    
    @Column(unique = true)
    private String email;
    
    private String password;
    
    @Column(unique = true)
    private String username;
     
    @Column(unique = true)
    private String mobileNumber;
    
    private String userRole;

    @Column(nullable = false, updatable = false)
    private LocalDate registrationDate = LocalDate.now();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore // Parent side
    private List<Enquiry> enquiries=new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore // Parent side
    private List<PlanApplication> planApplications=new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore // Parent side
    private List<Feedback> feedbacks = new ArrayList<>();
}
