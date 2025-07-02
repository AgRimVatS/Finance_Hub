package com.examly.springapp.service;

import java.util.List;
import com.examly.springapp.model.Enquiry;

public interface EnquiryService {
    Enquiry addEnquiry(Enquiry enquiry,Long userId);
    Enquiry getEnquiryById(Long enquiryId);
    List<Enquiry> getAllEnquiries();
    List<Enquiry> getEnquiryByUserId(Long UserenquiryId);
    Enquiry deleteEnquiry(Long enquiryId);
    //added just now
    List<Enquiry> getUserEnquiries(Long userId);
}
