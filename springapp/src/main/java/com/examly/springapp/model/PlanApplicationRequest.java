package com.examly.springapp.model;

import java.time.LocalDate;
import lombok.Data;

@Data
public class PlanApplicationRequest {
    private Long userId;
    private Long savingsPlanId;
    private double appliedAmount;
    private String status; // PENDING, APPROVED, REJECTED
    private LocalDate date;
    private String remarks;
    private String image;
}
