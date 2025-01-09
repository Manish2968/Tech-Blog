package com.techblog.Exception;

public class PostException extends Exception {

	private String massage;
	
	private String error;

	public PostException(String massage, String error) {
		super();
		this.massage = massage;
		this.error = error;
	}

	public PostException(String massage) {
		super(massage);
		// TODO Auto-generated constructor stub
	}

	public String getMassage() {
		return massage;
	}

	public void setMassage(String massage) {
		this.massage = massage;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}
	
	
}
