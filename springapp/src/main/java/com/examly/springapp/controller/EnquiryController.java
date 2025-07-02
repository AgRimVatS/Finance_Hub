package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.model.Enquiry;
import com.examly.springapp.model.EnquiryDTO;
import com.examly.springapp.model.User;
import com.examly.springapp.responses.ApiResponse;
import com.examly.springapp.service.EnquiryServiceImpl;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping(path = "/api/enquiries")
public class EnquiryController {

    @Autowired
    EnquiryServiceImpl enquiryServiceImpl;

    // @GetMapping("/{enquiryId}")
    // public ResponseEntity<?> viewEnquiryById(@PathVariable Long enquiryId){
    // Enquiry enquiry = enquiryServiceImpl.getEnquiryById(enquiryId);
    // if(enquiry==null) return new
    // ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    // return new ResponseEntity<>(enquiry,HttpStatus.OK);
    // }

    // @GetMapping("/user/{userId}")
    // public ResponseEntity<?> viewEnquiryByUserId(@PathVariable Long userId){
    // List<Enquiry> enquiries = enquiryServiceImpl.getEnquiryByUserId(userId);
    // if(enquiries.isEmpty()) return new
    // ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    // return new ResponseEntity<>(enquiries,HttpStatus.CREATED);
    // }

    // @DeleteMapping("/{enquiryId}")
    // public ResponseEntity<?> deleteEnquiryById(@PathVariable Long enquiryId){
    // Enquiry enquiry = enquiryServiceImpl.deleteEnquiry(enquiryId);
    // if(enquiry==null) return new
    // ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    // return new ResponseEntity<>(enquiry,HttpStatus.OK);
    // }

    @PreAuthorize("hasAuthority('ROLE_USER')")
    @PostMapping("/{userId}")
    public ResponseEntity<?> addEnquiries(@RequestBody Enquiry enq,@PathVariable Long userId) {
        Enquiry enquiry = enquiryServiceImpl.addEnquiry(enq,userId);
    
        if (enquiry == null)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(enquiry, HttpStatus.CREATED);
    }

    @PreAuthorize("hasAuthority('ROLE_USER')")
    @GetMapping("/user/{userId}")
    public ResponseEntity<ApiResponse<List<Enquiry>>> getUserEnquiries(@PathVariable Long userId) {
        System.out.println("USER ID:::  "+userId);
        List<Enquiry> enquiries = enquiryServiceImpl.getUserEnquiries(userId);

        if (enquiries.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse<>(false, "No enquiries found for the user", null));
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(new ApiResponse<>(true, "User enquiries retrieved", enquiries));
    }

    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping
    public ResponseEntity<?> viewAllEnquiry() {
        List<Enquiry> enquiries = enquiryServiceImpl.getAllEnquiries();
        // System.out.println(enquiries);
        if (enquiries.isEmpty())
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(enquiries, HttpStatus.OK);
    }

    // @PreAuthorize("hasAuthority('USER')")
    // @PutMapping("/{id}")
    // public ResponseEntity<ApiResponse<String>> editEnquiry(@PathVariable Long id,
    //                                                        @RequestBody String newMessage) {
    //     try {
    //         String message = enquiryService.editEnquiry(id, newMessage);
    //         return ResponseEntity.ok(new ApiResponse<>(true, message, null));
    //     } catch (EntityNotFoundException e) {
    //         return ResponseEntity.status(404)
    //                 .body(new ApiResponse<>(false, e.getMessage(), null));
    //     } catch (IllegalStateException e) {
    //         return ResponseEntity.badRequest()
    //                 .body(new ApiResponse<>(false, e.getMessage(), null));
    //     }
    // }


    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/{id}/reply")
    public ResponseEntity<ApiResponse<String>> replyToEnquiry(@PathVariable Long id,
                                                              @RequestParam String reply,
                                                              @RequestParam(required = false) String status) {
        try {
            String message = enquiryServiceImpl.replyToEnquiry(id, reply, status);
            return ResponseEntity.ok(new ApiResponse<>(true, message, null));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(404)
                    .body(new ApiResponse<>(false, e.getMessage(), null));
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest()
                    .body(new ApiResponse<>(false, e.getMessage(), null));
        }
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<ApiResponse<EnquiryDTO>> getEnquiryById(@PathVariable Long id) {
        Enquiry enquiry = enquiryServiceImpl.getEnquiryById(id);
        EnquiryDTO enquiryDTO = new EnquiryDTO(enquiry);
        return ResponseEntity.ok(new ApiResponse<>(true, "Enquiry fetched successfully", enquiryDTO));
    }

    
    @PutMapping("/{enquiryId}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<ApiResponse<Enquiry>> updateEnquiry(@PathVariable Long enquiryId, @RequestBody Enquiry updatedEnquiry) {
        try {
            Enquiry existingEnquiry = enquiryServiceImpl.getEnquiryById(enquiryId);

            if (existingEnquiry == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse<>(false, "Enquiry not found", null));
            }

            // Ensure the enquiry is in 'PENDING' status before allowing the edit
            if (!existingEnquiry.getStatus().equals("PENDING")) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new ApiResponse<>(false, "Can't edit approved or resolved enquiries", null));
            }

            // Update the enquiry message
            existingEnquiry.setMessage(updatedEnquiry.getMessage());

            // Save the updated enquiry
            Enquiry savedEnquiry = enquiryServiceImpl.saveEnquiry(existingEnquiry);

            return ResponseEntity.ok(new ApiResponse<>(true, "Enquiry updated successfully", savedEnquiry));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse<>(false, "Error updating enquiry", null));
        }
    }
}