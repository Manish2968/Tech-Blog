package com.techblog.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techblog.Model.User;
import com.techblog.Model.UserPost;

import com.techblog.Repository.UserPostRepository;
import com.techblog.Repository.UserRepository;
import com.techblog.Request.createShareRequest;
import com.techblog.Response.Share;
import com.techblog.Response.ShareResponse;
import com.techblog.Response.UserLike;

@RestController
@RequestMapping("/api/share")
public class ShareController {

	
	private UserPostRepository userPostRepository;
	private UserRepository userRepository;
	
	
	
	
	
	@Autowired
	public ShareController(UserPostRepository userPostRepository, UserRepository userRepository) {
		super();
		this.userPostRepository = userPostRepository;
		this.userRepository = userRepository;
	}

	public ShareController() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@PostMapping("/create")
	public ResponseEntity<ShareResponse>createShareController(@RequestBody createShareRequest createShareRequest)
	{
		UserPost post=userPostRepository.getById(createShareRequest.getPostId());
		System.out.println("user id " + createShareRequest.getCurrentUserId() + "post id " + createShareRequest.getPostId());
		
		User user=userRepository.getById(createShareRequest.getCurrentUserId());
		
		List<Long> share=post.getShare();
		Long id=createShareRequest.getCurrentUserId();
		ShareResponse res=new ShareResponse();
		res.setIsShare(false);
		res.setCount((long)share.size());
		for(Long ids: share)
		{
			if(ids == id)
			{
				res.setIsShare(true);
			}
		}
		if(res.getIsShare() != true)
		{
			share.add(id);
		}
		
		post.setShare(share);
		
		UserPost savedPost=userPostRepository.saveAndFlush(post);
		
		
		return new ResponseEntity<>(res,HttpStatus.ACCEPTED);
		
	}
	
	@GetMapping("/getshare/{postId}")
	public ResponseEntity<ShareResponse>getShareHandler(@PathVariable Long postId)
	{
		UserPost post=userPostRepository.getById(postId);
		
		List<Long> share=post.getShare();
		
		ShareResponse res=new ShareResponse();
		res.setCount((long)share.size());
		res.setIsShare(false);
		
		return new ResponseEntity<>(res,HttpStatus.ACCEPTED);
	}
}
