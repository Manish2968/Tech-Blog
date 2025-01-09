package com.techblog.Response;

import java.util.List;

public class CommentAnser {
	
	private List<String>anser;

	public CommentAnser(List<String> anser) {
		super();
		this.anser = anser;
	}

	public CommentAnser() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<String> getAnser() {
		return anser;
	}

	public void setAnser(List<String> anser) {
		this.anser = anser;
	}
	
	public void addComment(String cmt)
	{
		anser.add(cmt);
	}
	
	
}
