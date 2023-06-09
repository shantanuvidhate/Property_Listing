package com.shantanu.propertylisting;

import com.shantanu.propertylisting.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository <Post,Integer> {

}
