package com.examly.springapp.service;

import com.examly.springapp.responses.ApiResponse;
import com.examly.springapp.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import java.time.LocalDate;
import java.time.YearMonth;
import java.util.*;

@Service
@RequiredArgsConstructor
public class AdminDashboardService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private SavingsPlanRepo savingsPlanRepo;
    @Autowired
    private PlanApplicationRepo planApplicationRepo;
    @Autowired
    private EnquiryRepo enquiryRepo;
    @Autowired
    private FeedbackRepo feedbackRepo;

    public ApiResponse<?> getDashboardStats() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalUsers", userRepo.count());
        stats.put("totalSavingsPlans", savingsPlanRepo.count());
        stats.put("totalPlanApplications", planApplicationRepo.count());
        stats.put("totalEnquiries", enquiryRepo.count());
        stats.put("resolvedEnquiries", enquiryRepo.countByStatus("RESOLVED"));
        stats.put("totalFeedbacks", feedbackRepo.count());

        return new ApiResponse<>(true, "Dashboard statistics fetched successfully", stats);
    }

    public ApiResponse<?> getPlanApplicationStatusStats() {
        Map<String, Long> statusStats = new HashMap<>();
        statusStats.put("PENDING", planApplicationRepo.countByStatus("PENDING"));
        statusStats.put("APPROVED", planApplicationRepo.countByStatus("APPROVED"));
        statusStats.put("REJECTED", planApplicationRepo.countByStatus("REJECTED"));

        return new ApiResponse<>(true, "Plan Application Status Stats", statusStats);
    }

    public ApiResponse<?> getMonthlyApplicationTrends() {
        Map<String, Long> monthlyData = new LinkedHashMap<>();

        for (int i = 5; i >= 0; i--) {
            YearMonth month = YearMonth.now().minusMonths(i);
            long count = planApplicationRepo.countByDateBetween(
                    month.atDay(1), month.atEndOfMonth());
            monthlyData.put(month.toString(), count);
        }

        return new ApiResponse<>(true, "Monthly Application Trends", monthlyData);
    }

    public ApiResponse<?> getEnquiryStatusStats() {
        Map<String, Long> enquiryStats = new HashMap<>();
        enquiryStats.put("PENDING", enquiryRepo.countByStatus("PENDING"));
        enquiryStats.put("RESOLVED", enquiryRepo.countByStatus("RESOLVED"));

        return new ApiResponse<>(true, "Enquiry Status Stats", enquiryStats);
    }

    public ApiResponse<?> getUserGrowthStats() {
        Map<String, Long> userGrowth = new LinkedHashMap<>();

        for (int i = 5; i >= 0; i--) {
            YearMonth month = YearMonth.now().minusMonths(i);
            long count = userRepo.countByRegistrationDateBetween(
                    month.atDay(1), month.atEndOfMonth());
            userGrowth.put(month.toString(), count);
        }

        return new ApiResponse<>(true, "User Growth Stats", userGrowth);
    }

    public ApiResponse<?> getSavingsPlanPopularity() {
        List<Object[]> results = planApplicationRepo.countApplicationsPerPlan();
        Map<String, Long> popularity = new LinkedHashMap<>();

        for (Object[] result : results) {
            popularity.put((String) result[0], (Long) result[1]);
        }

        return new ApiResponse<>(true, "Savings Plan Popularity", popularity);
    }

    public ApiResponse<?> getRecentPlanApplications() {
        return new ApiResponse<>(true, "Recent Plan Applications", planApplicationRepo.findTop10ByOrderByDateDesc());
    }

    public ApiResponse<?> getRecentEnquiries() {
        return new ApiResponse<>(true, "Recent Enquiries", enquiryRepo.findTop10ByOrderByEnquiryIdDesc());
    }

    public ApiResponse<?> getRecentFeedbacks() {
        return new ApiResponse<>(true, "Recent Feedbacks", feedbackRepo.findTop10ByOrderByDateDesc());
    }

    public ApiResponse<?> getAllUsers(){
        return new ApiResponse<>(true,"Fetched all users successfully",userRepo.findAll());
    }
}
