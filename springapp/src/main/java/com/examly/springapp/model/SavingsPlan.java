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
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SavingsPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long savingsPlanId;
    private String name;
    private double goalAmount;
    private int timeFrame;
    private String riskLevel;
    private String description;

    @Column(nullable = false)
    private String status; // ACTIVE OR INACTIVE

    @OneToMany(mappedBy = "savingsPlan", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<PlanApplication> planApplications;
}
