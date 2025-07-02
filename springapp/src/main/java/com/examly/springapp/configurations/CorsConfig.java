package com.examly.springapp.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        
        // Allow specific origins or patterns
        config.setAllowedOriginPatterns(List.of("https://ide-cacacacfdeafbedfebedabfcbfefde.premiumproject.examly.io/proxy/8081/","https://8081-cacacacfdeafbedfebedabfcbfefde.premiumproject.examly.io/","https://8081-cacacacfdeafbedfebedabfcbfefde.premiumproject.examly.io","https://8081-cacacacfdeafbedfebedabfcbfefde.premiumproject.examly.io/user/view/feedback")); // Change as per your frontend URL
        
        // Allow credentials
        config.setAllowCredentials(true);
        
        // Allow necessary HTTP methods
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        
        // Allow necessary headers
        config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
