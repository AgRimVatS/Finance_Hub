package com.examly.springapp.service;

import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.PlanApplication;
import com.examly.springapp.model.PlanApplicationRequest;
import com.examly.springapp.model.SavingsPlan;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.PlanApplicationRepo;
import com.examly.springapp.repository.SavingsPlanRepo;
import com.examly.springapp.repository.UserRepo;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class PlanApplicationServiceImpl {

    @Autowired
    private PlanApplicationRepo planApplicationRepository;
    @Autowired
    private UserRepo userRepository;
    @Autowired
    private SavingsPlanRepo savingsPlanRepository;

    @Transactional
    public PlanApplication applyForPlan(PlanApplicationRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found with id: " + request.getUserId()));
        SavingsPlan savingsPlan = savingsPlanRepository.findById(request.getSavingsPlanId())
                .orElseThrow(
                        () -> new RuntimeException("Savings plan not found with id: " + request.getSavingsPlanId()));

        PlanApplication planApplication = new PlanApplication();
        planApplication.setAppliedAmount(request.getAppliedAmount());
        planApplication.setStatus("PENDING");
        planApplication.setDate(request.getDate());
        planApplication.setRemarks(request.getRemarks());
        planApplication.setImage(request.getImage());
        planApplication.setUser(user);
        planApplication.setSavingsPlan(savingsPlan);

        return planApplicationRepository.save(planApplication);
    }

    public List<PlanApplication> getUserApplications(Long userId) {
        return planApplicationRepository.findByUser_UserId(userId);
    }

    public List<PlanApplication> getAllApplications() {
        return planApplicationRepository.findAll();
    }

    public PlanApplication approveApplication(Long id) {
        PlanApplication application = planApplicationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Application not found"));
        application.setStatus("APPROVED");
        return planApplicationRepository.save(application);
    }

    public PlanApplication rejectApplication(Long id, String remarks) {
        PlanApplication application = planApplicationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Application not found"));
        application.setStatus("REJECTED");
        application.setRemarks(remarks);
        return planApplicationRepository.save(application);
    }

    public List<PlanApplication> getUserApplication(Long userId) {
        return planApplicationRepository.findByUser_UserId(userId);
    }

    public Long countByStatus(String string) {
        return planApplicationRepository.cByStatus(string);
    }

}
