package com.techblog.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.techblog.Exception.PostException;
import com.techblog.Model.User;
import com.techblog.Model.UserPost;

@Service
public interface PostService {
	
	public List<UserPost> generalPost() throws PostException;

}
