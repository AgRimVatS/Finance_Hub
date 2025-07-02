package com.examly.springapp.controller;

import com.examly.springapp.responses.ApiResponse;
import com.examly.springapp.service.AdminDashboardService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin/dashboard")
@RequiredArgsConstructor
@PreAuthorize("hasAuthority('ROLE_ADMIN')")
public class AdminDashboardController {

    @Autowired
    private AdminDashboardService dashboardService;

    @GetMapping("/stats")
    public ApiResponse<?> getAdminDashboardStats() {
        return dashboardService.getDashboardStats();
    }

    @GetMapping("/applications/status")
    public ApiResponse<?> getPlanApplicationStatusStats() {
        return dashboardService.getPlanApplicationStatusStats();
    }

    @GetMapping("/applications/monthly")
    public ApiResponse<?> getMonthlyApplicationTrends() {
        return dashboardService.getMonthlyApplicationTrends();
    }

    @GetMapping("/enquiries/status")
    public ApiResponse<?> getEnquiryStatusStats() {
        return dashboardService.getEnquiryStatusStats();
    }

    @GetMapping("/users/growth")
    public ApiResponse<?> getUserGrowthStats() {
        return dashboardService.getUserGrowthStats();
    }

    @GetMapping("/plans/popularity")
    public ApiResponse<?> getSavingsPlanPopularity() {
        return dashboardService.getSavingsPlanPopularity();
    }

    @GetMapping("/recent/applications")
    public ApiResponse<?> getRecentPlanApplications() {
        return dashboardService.getRecentPlanApplications();
    }

    @GetMapping("/recent/enquiries")
    public ApiResponse<?> getRecentEnquiries() {
        return dashboardService.getRecentEnquiries();
    }

    @GetMapping("/recent/feedbacks")
    public ApiResponse<?> getRecentFeedbacks() {
        return dashboardService.getRecentFeedbacks();
    }

    @GetMapping("/all-users")
    public ApiResponse<?> getAllUsers(){
        return dashboardService.getAllUsers();
    }
}
