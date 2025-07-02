package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.PlanApplication;

public interface PlanApplicationService {
    PlanApplication addPlanApplication(PlanApplication planApplication);
    PlanApplication UpdatePlanApplication(Long planApplicationId,PlanApplication planApplication );
    List <PlanApplication> getApplicationByUserId(Long userId);
    PlanApplication getApplicationById(Long planApplicationId );
    PlanApplication DeletePlanApplicationById(Long planApplicationId);


}
