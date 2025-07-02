package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.SavingsPlan;
import com.examly.springapp.model.User;

@Repository
public interface SavingsPlanRepo extends JpaRepository<SavingsPlan,Long> {

    @Query("SELECT sp FROM SavingsPlan sp WHERE sp NOT IN " +
           "(SELECT pa.savingsPlan FROM PlanApplication pa WHERE pa.user = :user)")
    List<SavingsPlan> findUnappliedSavingsPlans(@Param("user") User user);
}
