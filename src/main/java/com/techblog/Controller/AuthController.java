package com.techblog.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.techblog.Exception.UserException;
import com.techblog.Model.User;
import com.techblog.Repository.UserRepository;
import com.techblog.Request.AddForgetRequest;
import com.techblog.Request.AddUserRequest;
import com.techblog.Request.EditUserRequest;
import com.techblog.Request.LoginRequest;
import com.techblog.Response.UserResponse;
import com.techblog.Service.UserService;

@RestController
@RequestMapping("/api/user")
public class AuthController {
	private UserService userService;
	private UserRepository userRepository;
	

	@Autowired
	public AuthController(UserService userService , UserRepository userRepository) {
		super();
		this.userService = userService;
		this.userRepository=userRepository;
	}
	
	

	public UserService getUserService() {
		return userService;
	}



	public void setUserService(UserService userService) {
		this.userService = userService;
	}



	public UserRepository getUserRepository() {
		return userRepository;
	}



	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}



	public AuthController() {
		super();
		// TODO Auto-generated constructor stub
	}



	@PostMapping(value= "/register" , consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UserResponse> registerHandler(@RequestBody AddUserRequest addUserRequest) throws UserException
	{
		User user=userService.registerUser(addUserRequest);
		if(user == null)
		{
			throw new UserException("user data is not validate");
		}
		UserResponse res=new UserResponse("user registered success", HttpStatus.ACCEPTED.toString());
		System.out.println("user regsitered success");
		return new ResponseEntity<>(res,HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<User> loginHandler(@RequestBody LoginRequest loginRequest) throws UserException {
		System.out.print("login request " + loginRequest.getEmail() + loginRequest.getPassword());
		User user=userService.findByEmailPassword(loginRequest.getEmail(), loginRequest.getPassword());
		if(user == null)
		{
			throw new UserException("email and password is not correct");
		}
		System.out.println(user);
		return new ResponseEntity<User>(user,HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/forget")
	public ResponseEntity<User> forgetHandler(@RequestBody AddForgetRequest addForgetRequest) throws UserException
	{
	 
		User user=userRepository.findByEmail(addForgetRequest.getEmail());
		if(user == null)
		{
			throw new UserException("this email can not be registered");
		}
		user.setPassword(addForgetRequest.getPassword());
		User savedUser=userRepository.saveAndFlush(user);
		return new ResponseEntity<User>(savedUser,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/getuser/{userId}")
	public ResponseEntity<User> loginHandler(@PathVariable String userId) throws UserException {
		
		Long userTemp=Long.parseLong(userId);
		System.out.println("in the get user by id method" + userId);
		Long id=(long) 2;
		Optional<User> user=userRepository.findById(userTemp);
		if(!user.isPresent())
		{
			throw new UserException("User not found ");
		}
		
		return new ResponseEntity<User>(user.get(),HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/edit")
	public ResponseEntity<UserResponse>editProfileHandler(@RequestBody EditUserRequest edit)
	{
		System.out.println("in the edit profile page ");
		User user=userRepository.getById(edit.getId());
		user.setName(edit.getName());
		user.setAbout(edit.getAbout());
		user.setEmail(edit.getEmail());
		user.setGender(edit.getGender());
		user.setMobile(edit.getMobile());
		user.setPassword(edit.getProfilePhoto());
		
		User res=userRepository.saveAndFlush(user);
		UserResponse response=new UserResponse();
		response.setMassage("user updated successfully");
		response.setStatus("true");
		return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<User>> allUserHandler() {
		System.out.println("in the all user method");
		List<User>users=userRepository.findAll();
		
		return new ResponseEntity<>(users,HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/delete/{userId}")
	public ResponseEntity<User>deleteUser(@PathVariable Long userId)
	{
		Optional<User> userData=userRepository.findById(userId);
		
		userRepository.delete(userData.get());
		
		return new ResponseEntity<>(userData.get(),HttpStatus.ACCEPTED);
	}
	
	
	
	

}
