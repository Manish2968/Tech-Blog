package com.techblog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages = "com.techblog")
@EntityScan("com.techblog.Model") // Ensure this points to the package with your JPA entities
public class TechblogBackened1Application {

    public static void main(String[] args) {
        SpringApplication.run(TechblogBackened1Application.class, args);
        System.out.println("Running the application ....");
    }
}
