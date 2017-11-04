CREATE DATABASE hearthstone;

USE hearthstone;

CREATE table cards (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(50),
  description varchar(255),
  PRIMARY KEY(id)
);
