package com.techblog.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.techblog.Exception.UserException;
import com.techblog.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	
	@Query("SELECT u FROM User u WHERE u.email = :email")
	User findByEmail(@Param("email") String email);

	public List<User> findAll() ;
	
	@Query("SELECT u FROM User u where u.email= :email OR u.password= :password")
	public User findByEmailPassword(@Param("email") String email, @Param("password") String password) throws UserException;

	
	
	
}
