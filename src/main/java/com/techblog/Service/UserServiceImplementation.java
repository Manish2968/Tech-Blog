package com.techblog.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techblog.Exception.UserException;
import com.techblog.Model.User;
import com.techblog.Repository.UserRepository;
import com.techblog.Request.AddUserRequest;

@Service
public class UserServiceImplementation implements UserService{

	    @Autowired
	    private UserRepository userRepository;
	
	public UserRepository getUserRepository() {
		return userRepository;
	}

	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public UserServiceImplementation(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	
	

	public UserServiceImplementation() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public User findUserById(Long id)  {
		User user=userRepository.getById(id);
		if(user != null)
		return user;
		
		return null;
	}

	@Override
	public List<User> findAllUsers() throws UserException {
		List<User> users=userRepository.findAll();
		if(users != null)
		{
			return users;
		}
		throw new UserException("User must be empty");
	}

	@Override
	public User findByEmailPassword(String email, String password) throws UserException {
	    User user=userRepository.findByEmailPassword(email, password);
	    System.out.println("login request email " + email + "password" + password);
	    User temp=userRepository.findByEmail(email);
	    System.out.println("second user is " + temp);
	    if(user != null)
	    {
	    	return user;
	    }
	    throw new UserException("password will be not matched ");
	}

	@Override
	public User registerUser(AddUserRequest addUserRequest) throws UserException {
		
		User temp=userRepository.findByEmail(addUserRequest.getEmail());
		
		if(addUserRequest != null && temp == null)
		{
			User user=new User();
			user.setName(addUserRequest.getName());
			user.setEmail(addUserRequest.getEmail());
			user.setMobile(addUserRequest.getMobile());
			user.setPassword(addUserRequest.getPassword());
			user.setProfilePhotoUrl(addUserRequest.getProfilePhoto());
			user.setDomain("Software Engineer");
			user.setAbout(addUserRequest.getAbout());
			user.setGender(addUserRequest.getGender());
			
			User savedUser=userRepository.save(user);
			return savedUser;
		}
		throw new UserException("email is not valid");
	}

	

}
