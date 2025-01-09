package com.techblog.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.techblog.Model.Admin;
import com.techblog.Repository.AdminRepository;
import com.techblog.Request.LoginRequest;

@Controller
@RequestMapping("/api/admin")
public class AdminController {
	
	private AdminRepository adminRepository;

	@Autowired
	public AdminController(AdminRepository adminRepository) {
		super();
		this.adminRepository = adminRepository;
	}

	public AdminController() {
		super();
		// TODO Auto-generated constructor stub
	}

	@PostMapping("/login")
	public ResponseEntity<Admin> getLogin(@RequestBody LoginRequest req)
	{
		Admin admin=adminRepository.findAdmin(req.getEmail());
		
		return new ResponseEntity<>(admin,HttpStatus.ACCEPTED);
	}
	

}
