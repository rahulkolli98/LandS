CREATE DATABASE lands;

USE lands;

CREATE TABLE user_registration(
	id integer PRIMARY KEY auto_increment,
	full_name varchar(255) NOT NULL,
    user_name varchar(255) NOT NULL, 
    email varchar(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT password_length CHECK(char_length(password) >= 8));
    
    Select * from user_registration;
    
    INSERT INTO user_registration(full_name , user_name, email, password)
    VALUES ('test 1', 'test', 'test@gmail.com', 'tester123');
    
    
    