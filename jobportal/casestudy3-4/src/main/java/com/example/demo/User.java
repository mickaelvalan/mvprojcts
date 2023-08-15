package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
	@Id
	private int id;
private String name;
private int age;

private String emailid;
private int experience;
private String gen;
private String gender;
private String country;

@Override
public String toString() {
	return "User [id=" + id + ", name=" + name + ", age=" + age + ", emailid=" + emailid + ", experience=" + experience
			+ ", gen=" + gen + ", gender=" + gender + ", country=" + country + "]";
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public int getAge() {
	return age;
}
public void setAge(int age) {
	this.age = age;
}
public String getEmailid() {
	return emailid;
}
public void setEmailid(String emailid) {
	this.emailid = emailid;
}
public int getExperience() {
	return experience;
}
public void setExperience(int experience) {
	this.experience = experience;
}
public String getGen() {
	return gen;
}
public void setGen(String gen) {
	this.gen = gen;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public String getCountry() {
	return country;
}
public void setCountry(String country) {
	this.country = country;
}









}