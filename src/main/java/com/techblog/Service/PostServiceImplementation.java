package com.techblog.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.techblog.Exception.PostException;
import com.techblog.Model.User;
import com.techblog.Model.UserPost;
import com.techblog.Repository.UserPostRepository;
import com.techblog.Repository.UserRepository;


@Service
public class PostServiceImplementation implements PostService{

	private UserPostRepository postRepository;
	private UserRepository userRepository;
	public PostServiceImplementation(UserPostRepository postRepository, UserRepository userRepository) {
		super();
		this.postRepository = postRepository;
		this.userRepository = userRepository;
	}
	public PostServiceImplementation() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserPostRepository getPostRepository() {
		return postRepository;
	}
	public void setPostRepository(UserPostRepository postRepository) {
		this.postRepository = postRepository;
	}
	public UserRepository getUserRepository() {
		return userRepository;
	}
	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	@Override
	public List<UserPost> generalPost() throws PostException {
		List<UserPost> generalPost=postRepository.findAll();
		return generalPost;
	}
	
	
}
