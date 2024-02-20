CREATE DATABASE letters_db;
USE letters_db;

CREATE TABLE letters (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),

    sender_name VARCHAR(127) NOT NULL,
    sender_service VARCHAR(127),
    sender_address VARCHAR(255),
    sender_zipcode VARCHAR(15),
    sender_town VARCHAR(127),
    sender_phone VARCHAR(31),
    sender_mail VARCHAR(255),
    
    receiver_name VARCHAR(127) NOT NULL,
    receiver_service VARCHAR(127),
    receiver_address VARCHAR(255),
    receiver_zipcode VARCHAR(15),
    receiver_town VARCHAR(127),
    
    letter_object VARCHAR(255) NOT NULL,
    letter_body VARCHAR(800) NOT NULL
);
