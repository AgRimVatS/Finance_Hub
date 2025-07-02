package com.examly.springapp.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.model.PlanApplication;
import com.examly.springapp.model.PlanApplicationRequest;
import com.examly.springapp.repository.PlanApplicationRepo;
import com.examly.springapp.responses.ApiResponse;
import com.examly.springapp.service.PlanApplicationServiceImpl;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping(path = "/api/planapplications")
@CrossOrigin
public class PlanApplicationController {

    @Autowired
    private PlanApplicationServiceImpl planApplicationService;

    @PostMapping
    @PreAuthorize("hasAuthority('ROLE_USER')") // Only USER can apply
    public ResponseEntity<ApiResponse<PlanApplication>> applyForPlan(
            @RequestBody PlanApplicationRequest planApplication) {
        PlanApplication application = planApplicationService.applyForPlan(planApplication);
        return ResponseEntity.ok(new ApiResponse<>(true, "Plan application submitted successfully", application));
    }

    @GetMapping
    @PreAuthorize("hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_USER')") // Only ADMIN can view all applications
    public ResponseEntity<ApiResponse<List<PlanApplication>>> getAllApplications() {
        List<PlanApplication> applications = planApplicationService.getAllApplications();
        return ResponseEntity.ok(new ApiResponse<>(true, "Fetched all plan applications", applications));
    }

    @GetMapping("/applications/user/{userId}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<ApiResponse<List<PlanApplication>>> getUserApplications(@PathVariable Long userId) {
        List<PlanApplication> applications = planApplicationService.getUserApplication(userId);
        System.out.println("\n\nDBUG :: GET USER APPLICATIONS :: " + applications + "\n\n");
        return ResponseEntity.ok(new ApiResponse<>(true, "Applications retrieved", applications));
    }

    @PutMapping("/approve/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')") // Only ADMIN can approve/reject applications
    public ResponseEntity<ApiResponse<PlanApplication>> approveApplicationStatus(@PathVariable Long id) {
        PlanApplication updatedApplication = planApplicationService.approveApplication(id);
        return ResponseEntity
                .ok(new ApiResponse<>(true, "Plan application status updated successfully", updatedApplication));
    }

    @PutMapping("/reject/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')") // Only ADMIN can approve/reject applications
    public ResponseEntity<ApiResponse<PlanApplication>> rejectApplicationStatus(@PathVariable Long id,
            @RequestBody String updatedRemarks) {
        PlanApplication updatedApplication = planApplicationService.rejectApplication(id, updatedRemarks);
        return ResponseEntity
                .ok(new ApiResponse<>(true, "Plan application status updated successfully", updatedApplication));
    }

    // @DeleteMapping("/delete/{id}")
    // @PreAuthorize("hasAuthority('USER')") // Only USER can delete their
    // application
    // public ResponseEntity<ApiResponse<String>> deleteApplication(@PathVariable
    // Long id) {
    // planApplicationService.deleteApplication(id);
    // return ResponseEntity.ok(new ApiResponse<>(true, "Plan application deleted
    // successfully", null));
    // }

    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/applications/{id}/reject")
    public ResponseEntity<ApiResponse<String>> rejectApplication(@PathVariable Long id,@RequestParam String remarks) {
        PlanApplication app = planApplicationService.rejectApplication(id,remarks);
        if(app!=null)
        return ResponseEntity.ok(new ApiResponse<>(true, "Application rejected successfully", null));
        return ResponseEntity.internalServerError().body(new ApiResponse<>(false,"SOMETHING WENT WRONG",null));
    }

    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/applications/{id}/approve")
    public ResponseEntity<ApiResponse<String>> approveApplication(@PathVariable Long id) {
        PlanApplication application = planApplicationService.approveApplication(id);
        if(application!=null)
        return ResponseEntity.ok(new ApiResponse<>(true, "Application approved successfully", null));
        return ResponseEntity.internalServerError()
        .body(new ApiResponse<>(false, "Application Unable To Remove. SOMETHING WENT WRONG", null));
    }
}