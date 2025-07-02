package com.examly.springapp.repository;

import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.PlanApplication;

@Repository
public interface PlanApplicationRepo  extends JpaRepository<PlanApplication,Long>{

    List<PlanApplication> findByUser_UserId(Long userId);

    @Query("SELECT count(*) FROM PlanApplication p where p.status=:s")
    Long cByStatus(String s);




     //below codes are for admin dashboard
    long countByStatus(String status);
    long countByDateBetween(LocalDate start, LocalDate end);

    @Query("SELECT sp.name, COUNT(pa) FROM PlanApplication pa JOIN pa.savingsPlan sp GROUP BY sp.name")
    List<Object[]> countApplicationsPerPlan();

    List<PlanApplication> findTop10ByOrderByDateDesc();

}