package com.server.server.controller;

import com.server.server.DTO.PropertyForm;
import com.server.server.model.Property;
import com.server.server.repositories.PropertyPostRepository;
import com.server.server.services.AddPropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PropertyPostController {

//    private final AddPropertyService addPropertyService;

    @Autowired
    PropertyPostRepository propertyPostRepository;

//    public PropertyPostController(AddPropertyService addPropertyService, PropertyPostRepository propertyPostRepository) {
//        this.addPropertyService = addPropertyService;
//    }

    //    @GetMapping("/")
//    public String hello () {
//        return "Hello world";
//    }
    @CrossOrigin
    @GetMapping("/property-list")
    public List<Property> getAllProperty(){
        return propertyPostRepository.findAll();
    }

    @CrossOrigin
    @GetMapping("propertyDetails/{id}")
    public Property getPropertyById (@PathVariable Integer id) {
        return propertyPostRepository.findById(id).orElse(null);
    }

//    @PostMapping("/add-property")
//    public String addProperty(@RequestBody PropertyForm propertyForm) {
//        // Call the PropertyService to add the property to the database
////        propertyService.addProperty(propertyForm);
//        addPropertyService.addProperty(propertyForm);
//
//        return null;
//    }

}
