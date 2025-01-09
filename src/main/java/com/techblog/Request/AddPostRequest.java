package com.techblog.Request;

public class AddPostRequest {
	
	private String email;
	private String password;
	private String name;
	private String content;
	private String imageUrl;
	private int PostNumber;
	public AddPostRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	public AddPostRequest(String email, String password, String name, String content, String imageUrl, int postNumber) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
		this.content = content;
		this.imageUrl = imageUrl;
		PostNumber = postNumber;
	}
	
	



	public int getPostNumber() {
		return PostNumber;
	}



	public void setPostNumber(int postNumber) {
		PostNumber = postNumber;
	}



	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	

}
