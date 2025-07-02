package com.examly.springapp.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EnquiryDTO {
    private Long enquiryId;
    private String message;
    private String replyFromManager;
    private String status;
    
    // User details
    private Long userId;
    private String username;

    // Constructor
    public EnquiryDTO(Enquiry enquiry) {
        this.enquiryId = enquiry.getEnquiryId();
        this.message = enquiry.getMessage();
        this.replyFromManager = enquiry.getReplyFromManager();
        this.status = enquiry.getStatus();
        this.userId = enquiry.getUser().getUserId();
        this.username = enquiry.getUser().getUsername();
    }

    // Getters and Setters...
}
