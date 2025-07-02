package com.examly.springapp.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import com.examly.springapp.model.User;

import java.util.Date;
import java.util.function.Function;

@Component
public class JwtUtil {

    private String secretKey = "qwertyuiopasdfghjklmnbvcxzZAQWSXCDERFVBGTYHNMJUIKLOP"; // Change this in production

    // Generate Token (Valid for 2 Hours)
    public String generateToken(User user) {
        return Jwts.builder()
                .setSubject(user.getEmail())
                .claim("ROLE", user.getUserRole())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 2 * 60 * 60 * 1000)) // 2 hours validity
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    // Extract Username (Email) from Token
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // Extract Expiration Date
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    // Extract Specific Claim
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody();
        return claimsResolver.apply(claims);
    }

    // Extract All Claims
    public Claims extractAllClaims(String token) {
        return Jwts
        .parser()
        .setSigningKey(secretKey)
        .parseClaimsJws(token)
        .getBody();

    }

    // Check if Token is Expired
    public boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Validate Token
    public boolean validateToken(String token, String userEmail) {
        return (extractUsername(token).equals(userEmail) && !isTokenExpired(token));
    }
}

