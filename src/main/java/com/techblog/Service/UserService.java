package com.techblog.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.techblog.Exception.UserException;
import com.techblog.Model.User;
import com.techblog.Request.AddUserRequest;


@Service
public interface UserService  {
	
    public User findUserById(Long id) throws UserException;
	
	
	public List<User> findAllUsers() throws UserException;
	
	public User findByEmailPassword(String email,String password) throws UserException;
	
	public User registerUser(AddUserRequest addUserRequest) throws UserException;
	
	
}
