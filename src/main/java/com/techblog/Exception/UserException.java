package com.techblog.Exception;

public class UserException extends Exception  {

	private String massage;
	
	private String error;

	public UserException(String massage, String error) {
		
		this.massage = massage;
		this.error = error;
	}

	public UserException(String massage) {
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
