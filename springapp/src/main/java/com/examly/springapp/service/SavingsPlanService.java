package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.SavingsPlan;

public interface SavingsPlanService {

    SavingsPlan viewSavingsPlanById(Long savingsPlanId);
    List<SavingsPlan> viewAllSavingsPlans();
    SavingsPlan addSavingsPlan(SavingsPlan savingsPlan);
    SavingsPlan editSavingsPlan(Long savingsPlanId,SavingsPlan savingsPlan);
    SavingsPlan deleteSavingsPlan(Long savingsPlanId);

    List<SavingsPlan> viewSavingsPlanByUserId(Long userId,String status);



    List<SavingsPlan> getUnappliedSavingsPlans(Long userId);

}