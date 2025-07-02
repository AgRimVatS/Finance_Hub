package com.examly.springapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"user", "savingsPlan"})
public class PlanApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long planApplicationId;
    private double appliedAmount;
    private String status; // PENDING, APPROVED, REJECTED
    private LocalDate date;
    private String remarks;
    private String image;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "userId", nullable = false)
    @JsonIgnore // Child side
    private User user;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "savingsPlanId", nullable = false)
    @JsonIgnore
    private SavingsPlan savingsPlan;
}
