package com.techblog.Response;

public class UserResponse {
	private String massage;
	private String status;
	public UserResponse(String massage, String status) {
		super();
		this.massage = massage;
		this.status = status;
	}
	public UserResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getMassage() {
		return massage;
	}
	public void setMassage(String massage) {
		this.massage = massage;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	

}
