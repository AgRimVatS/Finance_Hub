package com.examly.springapp.controller;

import com.examly.springapp.responses.ApiResponse;
import com.examly.springapp.service.SavingsPlanServiceImpl;
import com.examly.springapp.model.SavingsPlan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/savingsplans")
@CrossOrigin
public class SavingsPlanController {

    @Autowired
    private SavingsPlanServiceImpl savingsPlanService;

    @PostMapping(consumes = "application/json")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')") // Only ADMIN can add plans
    public ResponseEntity<ApiResponse<SavingsPlan>> addSavingsPlan(@RequestBody SavingsPlan savingsPlan) {
        SavingsPlan savedPlan = savingsPlanService.addSavingsPlan(savingsPlan);
        return ResponseEntity.ok(new ApiResponse<>(true, "Savings Plan added successfully", savedPlan));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<SavingsPlan>>> getAllPlans() {
        List<SavingsPlan> plans = savingsPlanService.getAllPlans();
        return ResponseEntity.ok(new ApiResponse<>(true, "Fetched all savings plans", plans));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')") // Only ADMIN can update plans
    public ResponseEntity<ApiResponse<SavingsPlan>> updateSavingsPlan(@PathVariable Long id, @RequestBody SavingsPlan savingsPlan) {
        SavingsPlan updatedPlan = savingsPlanService.updateSavingsPlan(id, savingsPlan);
        return ResponseEntity.ok(new ApiResponse<>(true, "Savings Plan updated successfully", updatedPlan));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')") // Only ADMIN can delete plans
    public ResponseEntity<ApiResponse<String>> deleteSavingsPlan(@PathVariable Long id) {
        savingsPlanService.deleteSavingsPlan(id);
        return ResponseEntity.ok(new ApiResponse<>(true, "Savings Plan deleted successfully", null));
    }

    @GetMapping("/{savingsPlanId}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<ApiResponse<SavingsPlan>> getSavingsPlanById(@PathVariable Long savingsPlanId){
        SavingsPlan savingsPlan = savingsPlanService.getSavingsPlanById(savingsPlanId);
        if(savingsPlan==null)return ResponseEntity.notFound().build();
        return ResponseEntity.ok(new ApiResponse<>(true, "Savings plan fetched successfully", savingsPlan));
    }
}
