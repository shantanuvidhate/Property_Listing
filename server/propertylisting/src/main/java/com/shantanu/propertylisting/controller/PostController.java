package com.shantanu.propertylisting.controller;

import com.shantanu.propertylisting.PostRepository;
import com.shantanu.propertylisting.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
public class PostController {

    @Autowired
    PostRepository repo;
    @ApiIgnore
    @RequestMapping(value="/")
    public void redirect (HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui.html");
    }

    @GetMapping("/propertypost")
    public List<Post> getAllPosts(){
        return repo.findAll();
    }

}
