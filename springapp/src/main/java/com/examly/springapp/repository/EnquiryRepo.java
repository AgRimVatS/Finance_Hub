package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.Enquiry;
import java.util.List;

@Repository
public interface EnquiryRepo extends JpaRepository<Enquiry, Long> {
    List<Enquiry> findByUser_UserId(Long userId);


    //admin dashboard codes
    long countByStatus(String status);
    List<Enquiry> findTop10ByOrderByEnquiryIdDesc();
    
}