package com.techblog.Model;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "Name" , nullable = false)
	private String name;
	
	private String domain;
	
	@Column(nullable = false)
	private String password;
	@Column(nullable = false)
	private String email;
	
	@Column(name = "Mobile" , nullable = false)
	private String mobile;
	
	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	private String profilePhotoUrl;
	
	@Column(nullable = false)
	private String gender;
	
	private String about;
	
	private int PostNumber;
	
	@JsonIgnore
	@OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
	private List<UserPost> posts;
	
	@JsonIgnore
	@OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
	private List<Friend> friends;
	
	private LocalDateTime createAt=LocalDateTime.now();

	

	public LocalDateTime getCreateAt() {
		return createAt;
	}

	public void setCreateAt(LocalDateTime createAt) {
		this.createAt = createAt;
	}

	
	

	public int getPostNumber() {
		return PostNumber;
	}

	public void setPostNumber(int postNumber) {
		PostNumber = postNumber;
	}

	public User(Long id, String name, String domain, String password, String email, String mobile,
			String profilePhotoUrl, String gender, String about, int postNumber, List<UserPost> posts,
			List<Friend> friends, LocalDateTime createAt) {
		super();
		this.id = id;
		this.name = name;
		this.domain = domain;
		this.password = password;
		this.email = email;
		this.mobile = mobile;
		this.profilePhotoUrl = profilePhotoUrl;
		this.gender = gender;
		this.about = about;
		PostNumber = postNumber;
		this.posts = posts;
		this.friends = friends;
		this.createAt = createAt;
	}

	public User() {
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

	public String getDomain() {
		return domain;
	}

	public void setDomain(String domain) {
		this.domain = domain;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getProfilePhotoUrl() {
		return profilePhotoUrl;
	}

	public void setProfilePhotoUrl(String profilePhotoUrl) {
		this.profilePhotoUrl = profilePhotoUrl;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public List<UserPost> getPosts() {
		return posts;
	}

	public void setPosts(List<UserPost> posts) {
		this.posts = posts;
	}

	public List<Friend> getFriends() {
		return friends;
	}

	public void setFriends(List<Friend> friends) {
		this.friends = friends;
	}

//	@Override
//	public String toString() {
//		return "User [id=" + id + ", name=" + name + ", domain=" + domain + ", password=" + password + ", email="
//				+ email + ", profilePhotoUrl=" + profilePhotoUrl + ", gender=" + gender + ", about=" + about
//				+ ", posts=" + posts + ", friends=" + friends + "]";
//	}
//	
	
	
	
	

}
