package com.techblog.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techblog.Model.UserPost;

import com.techblog.Repository.UserPostRepository;
import com.techblog.Response.LikeResponse;
import com.techblog.Response.UserLike;
import com.techblog.Response.UserResponse;

@RestController
@RequestMapping("/api/like")
public class LikeController {
	
	private UserPostRepository userPostRepository;
	

	@Autowired
	public LikeController(UserPostRepository userPostRepository) {
		super();
		this.userPostRepository = userPostRepository;
		
	}

	public LikeController() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@GetMapping("/increament/{postId}/{userId}")
	public ResponseEntity<LikeResponse>likeIncreamentHandler(@PathVariable Long postId,@PathVariable Long userId) 
	{
		System.out.println("in the like increament controller" + userId);
		UserPost post=userPostRepository.getById(postId);
		
		LikeResponse res=new LikeResponse();
		
		List<Long> likes=post.getLikes();
		res.setIsLike(false);
		res.setCount((long)likes.size());
		for(Long id: likes)
		{
			if(id == userId)
			{
				res.setIsLike(true);
			}
		}
		
		if(res.getIsLike() != true)
		{
			likes.add(userId);
			post.setLikes(likes);
			UserPost savedPost=userPostRepository.saveAndFlush(post);
		}
		return new ResponseEntity<>(res,HttpStatus.ACCEPTED);
	}
	
	
	@GetMapping("/getlike/{postId}/{userId}")
	public ResponseEntity<LikeResponse>likeGetHandler(@PathVariable Long postId,@PathVariable Long userId) 
	{
		System.out.println("in the like get controller" + postId);
		
		UserPost post=userPostRepository.getById(postId);
		
		List<Long> userIds=post.getLikes();
		LikeResponse res=new LikeResponse();
		res.setCount((long)userIds.size());
		res.setIsLike(false);
		for(Long id: userIds)
		{
			if(id == userId)
			{
				res.setIsLike(true);
			}
		}
		
		return new ResponseEntity<LikeResponse>(res,HttpStatus.ACCEPTED);
	}
	
	
	
	
	

}
