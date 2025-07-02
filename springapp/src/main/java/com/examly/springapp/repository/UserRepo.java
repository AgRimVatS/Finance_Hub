package com.examly.springapp.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.User;


@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    User findByUsername(String username);
    boolean existsByEmail(String email);
    boolean existsByUsername(String username);
    boolean existsByMobileNumber(String mobileNumber);

    long countByRegistrationDateBetween(LocalDate start, LocalDate end);
    List<User> findByRegistrationDateBetween(LocalDate startDate, LocalDate endDate);

}