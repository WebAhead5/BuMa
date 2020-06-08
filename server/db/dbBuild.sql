BEGIN;

DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS appointments CASCADE;
DROP TABLE IF EXISTS appointments_customers;
DROP TYPE IF EXISTS payment_unit CASCADE;
DROP TYPE IF EXISTS curreny_code CASCADE;
DROP TABLE IF EXISTS appointments_customers;
DROP TABLE IF EXISTS payment_settings;
DROP TABLE IF EXISTS users;


CREATE TYPE payment_unit AS ENUM ('Week','Appointment','Month');
CREATE TYPE curreny_code AS ENUM ('ILS','USD', 'EUR', 'CNY');


CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20) UNIQUE NOT NULL,
  userid INT NOT NULL,
  paymentStatus BOOLEAN NOT NULL,
  activityStatus BOOLEAN NOT NULL,
  notes VARCHAR,
  balance DECIMAL NOT NULL ,
  appointmentPrice NUMERIC,
  paymentEveryValue NUMERIC,
  paymentEveryUnit payment_unit,
  balanceValidUntil Date
);

CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  userid INT NOT NULL,
  day DATE NOT NULL,
  start_at TIME NOT NULL,
  end_at TIME NOT NULL,
  note VARCHAR
);

CREATE TABLE appointments_customers (
  id SERIAL PRIMARY KEY,
  customerid INT NOT NULL,
  appintmentid INT NOT NULL
);

CREATE TABLE payment_settings(
  id SERIAL PRIMARY KEY,
  userid INT NOT NULL,
  curreny curreny_code DEFAULT 'ILS',
  request_payment_every_value INT,
  request_payment_very_unit payment_unit
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(30) UNIQUE NOT NULL,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(12) NOT NULL,
  phone VARCHAR(20),
  business_name VARCHAR(30) NOT NULL,
  business_logo VARCHAR(100),
  crn VARCHAR(20) NOT NULL,
  business_address VARCHAR(100)
);


INSERT INTO customers (name, email, phone, userid, paymentStatus, activityStatus,
  notes, 
  balance,
  appointmentPrice,
  paymentEveryValue,
  paymentEveryUnit,
  balanceValidUntil)
VALUES 
('Marwan', 'gobo@email.com', 0551554555, 1, true, true, '', 50,40,2,'Week','2012-04-25'),
('Hashem', 'hashem@email.com', 0551534555, 1, true, false, '',50,100,2,'Appointment','2012-04-25'),
('Farid', 'farid@email.com', 0551254555, 1, true, false, '',50,25,1,'Month',null),
('Khalid', 'khalid@email.com', 0531554555, 1, true, true, '',90,40,2,'Week','2012-04-25');


INSERT INTO appointments (userid, day, start_at, end_at, note)
VALUES 
(1, '2020-06-02', '08:00:00', '10:00:00','Note 1'),
(1, '2020-06-20', '09:00:00', '11:00:00','Note 2'),
(1, '2020-05-28', '12:00:00', '14:00:00','Note 3'),
(1, '2020-05-25', '20:00:00', '21:00:00','Note 4');

INSERT INTO appointments_customers (customerid, appintmentid)
VALUES 
( 1, 1),
( 2, 2),
( 3, 3),
( 4, 3);

INSERT INTO payment_settings (userid, curreny,request_payment_every_value,request_payment_very_unit)
VALUES 
(1, null , 2,'Month'),
(1, 'ILS', 5,'Week'),
(1, 'EUR', 6,'Month'),
(1, 'CNY', 1,'Appointment');


INSERT INTO users (first_name, last_name, email, username, password, phone, business_name,
  business_logo,
  crn,
  business_address)
VALUES 
('Morad', 'Abed','moraabed@email.com', 'morad', '111', '0500500506', 'Microsoft','http://morad_logo.jpg', '1234','1, Akko, Is'),
('Amir', 'Fahoum','amirfahoum@email.com', 'amir', '222', '0544444444', 'Google','http://amir_logo.jpg', '444','1, Akko, Is');

COMMIT;

