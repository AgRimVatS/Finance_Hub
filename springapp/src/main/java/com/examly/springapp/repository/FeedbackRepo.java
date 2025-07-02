

package com.examly.springapp.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.Feedback;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback,Long>{

    List<Feedback> findByUser_UserId(Long id);

    //admin dash board codes
    List<Feedback> findTop10ByOrderByDateDesc();

}

