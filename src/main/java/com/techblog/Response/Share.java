package com.techblog.Response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


public class Share {

	

    private List<Long>userIds;
    
    private Long count=(long) 0;

	public Share(List<Long> userIds, Long count) {
		super();
		this.userIds = userIds;
		this.count = count;
	}

	public Share() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<Long> getUserIds() {
		return userIds;
	}

	public void setUserIds(List<Long> userIds) {
		this.userIds = userIds;
	}

	public Long getCount() {
		return count;
	}

	public void setCount(Long count) {
		this.count = count;
	}
    
    
    
    // getters and setters
}
