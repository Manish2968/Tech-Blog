package com.techblog.Request;

public class CreateCommentRequest {

	
	private Long postId;
	
	private Long userId;
	
	private String comment;

	public CreateCommentRequest(Long postId, Long userId, String comment) {
		super();
		this.postId = postId;
		this.userId = userId;
		this.comment = comment;
	}

	public CreateCommentRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getPostId() {
		return postId;
	}

	public void setPostId(Long postId) {
		this.postId = postId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
	
	
}
