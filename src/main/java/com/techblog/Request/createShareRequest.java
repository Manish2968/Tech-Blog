package com.techblog.Request;

public class createShareRequest {
	
	private Long postId;
	private Long currentUserId;
	public createShareRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public createShareRequest(Long postId, Long currentUserId) {
		super();
		this.postId = postId;
		this.currentUserId = currentUserId;
	}
	public Long getPostId() {
		return postId;
	}
	public void setPostId(Long postId) {
		this.postId = postId;
	}
	public Long getCurrentUserId() {
		return currentUserId;
	}
	public void setCurrentUserId(Long currentUserId) {
		this.currentUserId = currentUserId;
	}
	
	

}
