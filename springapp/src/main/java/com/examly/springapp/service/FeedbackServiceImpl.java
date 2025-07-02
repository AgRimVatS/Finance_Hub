package com.examly.springapp.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.FeedBackDTO;
import com.examly.springapp.model.Feedback;
import com.examly.springapp.repository.FeedbackRepo;
import com.examly.springapp.repository.UserRepo;
import com.examly.springapp.service.FeedbackService;
import com.examly.springapp.model.User;

@Service
public class FeedbackServiceImpl implements FeedbackService{

    @Autowired
     private FeedbackRepo feedbackRepository;

    @Autowired
    private UserRepo userRepo;

     // Add feedback
    public FeedBackDTO addFeedback(Feedback feedback,Long userId) {
        feedback.setDate(LocalDate.now());
        User user = userRepo.findById(userId).get();
        if(user==null) return null;
        feedback.setUser(user);
        Feedback fdbk = feedbackRepository.save(feedback);
        FeedBackDTO fdto=new FeedBackDTO();
        fdto.setFeedbackId(fdbk.getFeedbackId());
        fdto.setFeedbackText(fdbk.getFeedbackText());
        fdto.setDate(fdbk.getDate());
        fdto.setUser(fdbk.getUser());
        return fdto;
    }

    // Update feedback (only by Admin)
    public Feedback updateFeedback(Long feedbackId, Feedback feedback) {
        Feedback existingFeedback = feedbackRepository.findById(feedbackId).get();
        if (existingFeedback!=null) {
            Feedback updatedFeedback = existingFeedback;
            updatedFeedback.setFeedbackText(feedback.getFeedbackText());
            return feedbackRepository.save(updatedFeedback);
        } else {
            throw new RuntimeException("Feedback not found");
        }
    }

    // Delete feedback (only by Admin)
    public boolean deleteFeedback(Long feedbackId) {
        Feedback feedback = feedbackRepository.findById(feedbackId).get();
        if (feedback!=null) {
            feedbackRepository.deleteById(feedbackId);
            return true;
        }
        return false;
    }

    // Get all feedback
    public List<FeedBackDTO> getAllFeedback() {
        List<Feedback>feedbackList=feedbackRepository.findAll();
        List<FeedBackDTO> fdbl=new ArrayList<>();
        for(Feedback f: feedbackList){
            FeedBackDTO fdto=new FeedBackDTO();
            fdto.setFeedbackId(f.getFeedbackId());
            fdto.setFeedbackText(f.getFeedbackText());
            fdto.setDate(f.getDate());
            fdto.setUser(f.getUser());
            fdbl.add(fdto);
        }
        return fdbl;
    }

    public List<Feedback> getFeedBackByUserId(Long userId) {
        return feedbackRepository.findByUser_UserId(userId);
    }
}