package com.techblog.Model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.print.attribute.standard.DateTimeAtCreation;

import org.hibernate.type.descriptor.jdbc.LocalDateJdbcType;
import org.springframework.context.annotation.Configuration;
import org.yaml.snakeyaml.comments.CommentType;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.techblog.Response.Share;
import com.techblog.Response.UserLike;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class UserPost {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	private int postNumber;
	
	@JsonIgnore
	@JoinColumn(name = "user_id")
	@ManyToOne
	private User user;
	
	private List<Long>likes =new ArrayList<>();
	
	private List<String> comment=new ArrayList<>();
	
	private List<Long> share=new ArrayList<>();
	
    private Long idUser;
	
	private String language;
	
	@Column(nullable=false)
	private String content;
	
	@Column
	private String imageUrl;
	
	
	
	private LocalDateTime createdAt=LocalDateTime.now();
	
	

	
	
	

	

	public List<Long> getLikes() {
		return likes;
	}

	public void setLikes(List<Long> likes) {
		this.likes = likes;
	}

	public List<String> getComment() {
		return comment;
	}

	public void setComment(List<String> comment) {
		this.comment = comment;
	}

	public List<Long> getShare() {
		return share;
	}

	public void setShare(List<Long> share) {
		this.share = share;
	}

	public UserPost(Long id, String name, int postNumber, User user, List<Long> likes, List<String> comment,
			List<Long> share, Long idUser, String language, String content, String imageUrl, LocalDateTime createdAt) {
		super();
		this.id = id;
		this.name = name;
		this.postNumber = postNumber;
		this.user = user;
		this.likes = likes;
		this.comment = comment;
		this.share = share;
		this.idUser = idUser;
		this.language = language;
		this.content = content;
		this.imageUrl = imageUrl;
		this.createdAt = createdAt;
	}

	public int getPostNumber() {
		return postNumber;
	}

	public void setPostNumber(int postNumber) {
		this.postNumber = postNumber;
	}

	

	public Long getIdUser() {
		return idUser;
	}

	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}

	
	

	

	public UserPost() {
		super();
		// TODO Auto-generated constructor stub
		
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
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

	

	


	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	
	
	

}
