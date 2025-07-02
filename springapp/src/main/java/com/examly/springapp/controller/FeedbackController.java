package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.FeedBackDTO;
import com.examly.springapp.model.Feedback;
import com.examly.springapp.service.FeedbackServiceImpl;

@RestController
@RequestMapping(path="/api/feedback")
public class FeedbackController {

    @Autowired
    FeedbackServiceImpl feedbackService;


    // Add feedback (can be done by User or Admin)
    @PostMapping("/{userId}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_USER')")
    public ResponseEntity<FeedBackDTO> addFeedback(@RequestBody Feedback feedback,@PathVariable Long userId) {
        FeedBackDTO newFeedback = feedbackService.addFeedback(feedback,userId);
        return ResponseEntity.ok(newFeedback);
    }

    // Update feedback (can only be done by Admin)
    @PutMapping("/{feedbackId}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Feedback> updateFeedback(@PathVariable Long feedbackId, @RequestBody Feedback feedback) {
        Feedback updatedFeedback = feedbackService.updateFeedback(feedbackId, feedback);
        return ResponseEntity.ok(updatedFeedback);
    }

    // Delete feedback (can only be done by Admin)
    @DeleteMapping("/{feedbackId}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_USER')")
    public ResponseEntity<String> deleteFeedback(@PathVariable Long feedbackId) {
        feedbackService.deleteFeedback(feedbackId);
        return ResponseEntity.ok("Feedback deleted successfully");
    }

    // Get all feedback (optional for listing)
    @GetMapping
    public ResponseEntity<List<FeedBackDTO>> getAllFeedback() {
        List<FeedBackDTO> fdbl = feedbackService.getAllFeedback();
        return ResponseEntity.ok(fdbl);
    }

    // Get feedback with userId
    @GetMapping("/{userId}")
    public ResponseEntity<List<Feedback>> getFeedBackByUserId(@PathVariable Long userId){
        List<Feedback> fdbl = feedbackService.getFeedBackByUserId(userId);
        return ResponseEntity.ok(fdbl);
    }

}