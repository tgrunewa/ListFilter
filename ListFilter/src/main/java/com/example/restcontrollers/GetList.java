package com.example.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.service.ListService;

@RestController
public class GetList {
	@Autowired
	private ListService listService;
	
	@RequestMapping("/getlist")
	public List<String> getList() {
		return listService.getList();
	}
}
