package com.examly.springapp.model;

import java.time.LocalDate;

import lombok.Data;

@Data
public class FeedBackDTO {
    private Long feedbackId;
    private String feedbackText;
    private LocalDate date;
    private User user;
}