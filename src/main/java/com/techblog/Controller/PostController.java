package com.techblog.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techblog.Exception.PostException;
import com.techblog.Exception.UserException;
import com.techblog.Model.User;
import com.techblog.Model.UserPost;

import com.techblog.Repository.UserPostRepository;
import com.techblog.Repository.UserRepository;
import com.techblog.Request.AddPostRequest;
import com.techblog.Request.CreateCommentRequest;
import com.techblog.Response.Share;
import com.techblog.Response.UserLike;
import com.techblog.Response.UserResponse;
import com.techblog.Service.PostService;

@RestController
@RequestMapping("/api/post")
public class PostController {
	
	
	private UserPostRepository userPostRepository;
	private PostService postService;
	private UserRepository userRepository;
	
	
	
	

	
	

	@Autowired
	public PostController(UserPostRepository userPostRepository, PostService postService,
			UserRepository userRepository) {
		super();
		this.userPostRepository = userPostRepository;
		this.postService = postService;
		this.userRepository = userRepository;
	}


	@PostMapping("/create")
	public ResponseEntity<UserPost> createPostHandler(@RequestBody AddPostRequest addPostRequest) throws UserException,
	PostException
	{
		User user=userRepository.findByEmailPassword(addPostRequest.getEmail(), addPostRequest.getPassword());
		
		System.out.println("in the creating method of posts" );
		
		List<UserPost> posts=user.getPosts();
		UserPost post=new UserPost();
		Long id=(long) posts.size() + 1;
		//post.setId(id);
		user.setPostNumber(posts.size()+1);
		post.setPostNumber(posts.size()+1);
		post.setUser(user);
		post.setName(addPostRequest.getName());
		post.setContent(addPostRequest.getContent());
		post.setImageUrl(addPostRequest.getImageUrl());
		post.setIdUser(user.getId());
		
		
		//System.out.println("the post id is " + post.getId());
		UserPost savedPost=userPostRepository.save(post);
		posts.add(savedPost);
		user.setPosts(posts);
		userRepository.saveAndFlush(user);
		System.out.println("saving the post data ");
		if(user.getPosts().size() == 0)
		{
			throw new PostException("can not creating the post ");
		}
		return new ResponseEntity<UserPost>(savedPost,HttpStatus.ACCEPTED);
		
	}
	
	
	
	@GetMapping("/general")
	public ResponseEntity<List<UserPost>>generalPost() throws PostException {
		
		List<UserPost> posts=userPostRepository.findAll();
		System.out.println("in the general post method ");
		if(posts == null)
		{
			throw new PostException("can not get the posts");
		}
		return new ResponseEntity<List<UserPost>>(posts,HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/comment/create")
	public ResponseEntity<List<String>> createCommentHandler(@RequestBody CreateCommentRequest
			createCommentRequest)
	{
		// Get the post by ID
		Optional<UserPost> posts = userPostRepository.findById(createCommentRequest.getPostId());
		        
		UserPost post=posts.get();
		
		List<String> comments=post.getComment();
		
		comments.add(createCommentRequest.getComment());
		
		post.setComment(comments);
		
		UserPost savedPost=userPostRepository.saveAndFlush(post);
		
		return new ResponseEntity<>(comments,HttpStatus.ACCEPTED);
	
		
	}
	
	@GetMapping("/seepost/{email}")
	public ResponseEntity<List<UserPost>>generalPost(@PathVariable String email) throws PostException {
		System.out.println("email is there " + email);
		User user=userRepository.findByEmail(email);
		System.out.println("user is " + user.getName());
		List<UserPost>posts=user.getPosts();
		if(posts == null)
		{
			throw new PostException("error in getting the data ");
		}
		return new ResponseEntity<List<UserPost>>(posts,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/comment/getcomment/{postId}")
	public ResponseEntity<List<String>> getCommentHandler(@PathVariable Long postId)
	{
		
		UserPost post=userPostRepository.getById(postId);
		
		List<String>comments=post.getComment();
		
		return new ResponseEntity<>(comments,HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/delete/{postId}")
	public ResponseEntity<UserResponse> deletePost(@PathVariable Long postId)
	{
		UserPost post=userPostRepository.getById(postId);
		
		userPostRepository.delete(post);
		
		UserResponse res=new UserResponse();
		res.setMassage("post deleted ");
		return new ResponseEntity<>(res,HttpStatus.ACCEPTED);
	}
	


	
	
	
}
