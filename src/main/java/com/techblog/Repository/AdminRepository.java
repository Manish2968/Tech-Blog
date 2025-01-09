package com.techblog.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.techblog.Model.Admin;

public interface AdminRepository extends JpaRepository<Admin, String>{

    @Query("SELECT a FROM Admin a WHERE a.email = :email")
    public Admin findAdmin(@Param("email") String email);

}
