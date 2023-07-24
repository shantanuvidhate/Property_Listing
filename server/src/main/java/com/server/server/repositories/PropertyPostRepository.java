package com.server.server.repositories;

import com.server.server.model.Property;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PropertyPostRepository extends MongoRepository <Property , Integer> {

}
