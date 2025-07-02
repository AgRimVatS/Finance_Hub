

package com.examly.springapp.service;

import java.util.Collections;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.examly.springapp.model.Enquiry;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.EnquiryRepo;
import com.examly.springapp.repository.UserRepo;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class EnquiryServiceImpl implements EnquiryService {

    @Autowired
    private EnquiryRepo enquiryRepo;
    @Autowired
    private UserRepo userRepository;

    @Override
    public Enquiry addEnquiry(Enquiry enquiry,Long userId) {
    
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + enquiry.getUser().getUserId()));
    
        enquiry.setUser(user); // Ensure user reference is properly set
    
        return enquiryRepo.save(enquiry);
        
    }

    @Override
    public List<Enquiry> getAllEnquiries() {
        return enquiryRepo.findAll();
    }

    
    // @Override
    // public Enquiry getEnquiryById(Long enquiryId) {
    //     if (enquiryRepo.existsById(enquiryId)) {
    //         return enquiryRepo.findById(enquiryId).get();
    //     }
    //     return null;
    // }
    public Enquiry deleteEnquiry(Long enquiryId) {
        if (enquiryRepo.existsById(enquiryId)) {
            Enquiry enquiry = enquiryRepo.findById(enquiryId).get();
            enquiryRepo.deleteById(enquiryId);
            return enquiry;
        }
        return null;
    }



    //----------------------------------------------------------------------------








    @Override
    public List<Enquiry> getUserEnquiries(Long userId) {
        List<Enquiry> enquiries = enquiryRepo.findByUser_UserId(userId);
        
        if (enquiries.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No enquiries found for user with ID: " + userId);
        }

        return enquiries;
    }

    @Override
    public List<Enquiry> getEnquiryByUserId(Long UserenquiryId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getEnquiryByUserId'");
    }

    @Transactional
    public String replyToEnquiry(Long id, String reply, String status) {
        Enquiry enquiry = enquiryRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Enquiry not found"));

        if (!"PENDING".equals(enquiry.getStatus())) {
            throw new IllegalStateException("Cannot reply to an already resolved enquiry");
        }
        // Only update status if it's being set to RESOLVED
        if ("RESOLVED".equals(status)) {
            enquiry.setStatus("RESOLVED");
            enquiry.setReplyFromManager(reply);
            enquiryRepo.save(enquiry);
            return "Reply added successfully";
        }
        return "Not Modified as status was not changed";
    }

    // // ✅ Service Method to Get Enquiry By ID
    public Enquiry getEnquiryById(Long id) {
        return enquiryRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Enquiry not found with ID: " + id));
    }

    // // Existing method to get a user’s enquiry by its ID
    // public Enquiry getEnquiryById(Long enquiryId) {
    //     return enquiryRepo.findById(enquiryId).orElse(null);
    // }

    // Save or update an enquiry
    public Enquiry saveEnquiry(Enquiry enquiry) {
        return enquiryRepo.save(enquiry);
    }

    // Existing method to get enquiries by user ID (if needed)
    public List<Enquiry> getEnquiriesByUserId(Long userId) {
        return enquiryRepo.findByUser_UserId(userId);
    }


}
