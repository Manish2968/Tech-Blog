package com.techblog.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.techblog.Exception.PostException;
import com.techblog.Model.User;
import com.techblog.Model.UserPost;

@Repository
public interface UserPostRepository extends JpaRepository<UserPost, Long> {

	
	
	
}
