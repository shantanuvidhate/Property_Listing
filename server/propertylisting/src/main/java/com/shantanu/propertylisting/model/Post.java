package com.shantanu.propertylisting.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "PropertyPost")
public class Post {
    private int id;
    private String title;
    private String description;
    private String status;
    private int price;
    private String location;
    private int area;
    private int bedrooms;
    private int bathrooms;
    private String image_url;
    private String country;
    private String owner_name;

    public String getCountry(){
        return country;
    }

    public void setCountry (String country){
        this.country = country;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getArea() {
        return area;
    }

    public void setArea(int area) {
        this.area = area;
    }

    public int getBedrooms() {
        return bedrooms;
    }

    public void setBedrooms(int bedrooms) {
        this.bedrooms = bedrooms;
    }

    public int getBathrooms() {
        return bathrooms;
    }

    public void setBathrooms(int bathrooms) {
        this.bathrooms = bathrooms;
    }

    public String getOwner_name() {
        return owner_name;
    }

    public void setOwner_name(String owner_name) {
        this.owner_name = owner_name;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", status='" + status + '\'' +
                ", price=" + price +
                ", location='" + location + '\'' +
                ", area=" + area +
                ", bedrooms=" + bedrooms +
                ", bathrooms=" + bathrooms +
                ", image_url='" + image_url + '\'' +
                ", country='" + country + '\'' +
                ", owner_name='" + owner_name + '\'' +
                '}';
    }

    public Post() {
    }

}
