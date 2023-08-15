package com.example.demo;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller

public class AllController {
	@Autowired
	UserDAO userdao;
	@RequestMapping("/index")	
	public String home(){

	return "index";
	
	}
	@RequestMapping("/it")	
	public String itit(){

	return "it";
	
	}
	@RequestMapping("/engpage")	
	public String engeng(){

	return "engpage";
	
	}
	@RequestMapping("/shippage")	
	public String shipship(){

	return "shippage";
	
	}
	@RequestMapping("/apply")
	public String appapp(User us)
	{
	return "apply";
	}
	
	@RequestMapping("/adduser")
	public String adduser(User us)
	{
		userdao.save(us);
	return "index";
	}
}