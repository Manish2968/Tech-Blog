package com.techblog.Response;

import java.util.List;

import com.techblog.Model.UserPost;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


public class UserLike {



    private List<Long> userId;

    private int count = 0;

	public UserLike() {
		super();
		// TODO Auto-generated constructor stub
	}



	
	public List<Long> getUserId() {
		return userId;
	}

	public void setUserId(List<Long> userId) {
		this.userId = userId;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}
    
	
    

    // getters and setters
}
