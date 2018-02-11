package com.example.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.domain.DomainItem;

@Service
public class ListService {
	public List<String> getList() {
		List<String> list = new ArrayList<String>();
		
        RestTemplate restTemplate = new RestTemplate();
        DomainItem[] listItems = restTemplate.getForObject("https://jsonplaceholder.typicode.com/albums", DomainItem[].class);

		for (DomainItem item : listItems) {
			list.add(item.getTitle());
		}
		
		return list;
	}

}
