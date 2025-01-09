package com.techblog.Response;

public class ShareResponse {
	
	private Long count=(long) 0;
	private Boolean isShare;
	public ShareResponse(Long count, Boolean isShare) {
		super();
		this.count = count;
		this.isShare = isShare;
	}
	public ShareResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getCount() {
		return count;
	}
	public void setCount(Long count) {
		this.count = count;
	}
	public Boolean getIsShare() {
		return isShare;
	}
	public void setIsShare(Boolean isShare) {
		this.isShare = isShare;
	}
	
	
	
	

}
