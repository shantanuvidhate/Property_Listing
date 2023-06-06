package com.shantanu.propertylisting.controller;

import com.shantanu.propertylisting.PostRepository;
import com.shantanu.propertylisting.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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
    @CrossOrigin         //for CORS resolve
    @GetMapping("/propertypost")
    public List<Post> getAllPropertyPosts(){
        return repo.findAll();
    }

    @PostMapping("/addproperty")
    public Post addProperty (@RequestBody Post post) {
        return repo.save(post);
    }

}
