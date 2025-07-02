package com.examly.springapp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.SavingsPlan;
import com.examly.springapp.repository.SavingsPlanRepo;

@Service
public class SavingsPlanServiceImpl {

    @Autowired
    private SavingsPlanRepo savingsPlanRepository;

    public SavingsPlan addSavingsPlan(SavingsPlan savingsPlan) {
        return savingsPlanRepository.save(savingsPlan);
    }

    public List<SavingsPlan> getAllPlans() {
        return savingsPlanRepository.findAll();
    }

    public SavingsPlan updateSavingsPlan(Long id, SavingsPlan updatedPlan) {
        SavingsPlan plan = savingsPlanRepository.findById(id).orElseThrow(() -> new RuntimeException("Plan not found"));
        plan.setName(updatedPlan.getName());
        plan.setGoalAmount(updatedPlan.getGoalAmount());
        plan.setTimeFrame(updatedPlan.getTimeFrame());
        plan.setRiskLevel(updatedPlan.getRiskLevel());
        plan.setDescription(updatedPlan.getDescription());
        plan.setStatus(updatedPlan.getStatus());
        return savingsPlanRepository.save(plan);
    }

    public void deleteSavingsPlan(Long id) {
        savingsPlanRepository.deleteById(id);
    }

    public SavingsPlan getSavingsPlanById(Long savingsPlanId) {
        return savingsPlanRepository.findById(savingsPlanId).orElse(null);
    }
}
