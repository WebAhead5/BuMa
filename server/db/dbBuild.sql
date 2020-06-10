BEGIN;

DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS appointments CASCADE;
DROP TABLE IF EXISTS appointments_customers;
DROP TYPE IF EXISTS payment_unit CASCADE;
DROP TYPE IF EXISTS currency_code CASCADE;
DROP TABLE IF EXISTS appointments_customers;
DROP TABLE IF EXISTS payment_settings;
DROP TABLE IF EXISTS reports CASCADE;
DROP TABLE IF EXISTS users;


CREATE TYPE payment_unit AS ENUM ('Week','Appointment','Month');
CREATE TYPE currency_code AS ENUM ('ILS','USD', 'EUR', 'CNY');


CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20) UNIQUE NOT NULL,
  userid INT NOT NULL,
  paymentStatus BOOLEAN DEFAULT false,
  activityStatus BOOLEAN DEFAULT true,
  notes VARCHAR,
  balance DECIMAL DEFAULT 0 ,
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
  userid INT UNIQUE NOT NULL,
  currency currency_code DEFAULT 'ILS',
  request_payment_every_value INT,
  request_payment_very_unit payment_unit
);



CREATE TABLE reports (
  id SERIAL PRIMARY KEY,
  userid INT NOT NULL,
  creatingDate DATE NOT NULL,
  pdfile VARCHAR NOT NULL
);




CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(30) UNIQUE NOT NULL,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(200) NOT NULL,
  phone VARCHAR(20),
  business_name VARCHAR(30) ,
  business_logo VARCHAR(100),
  crn VARCHAR(20),
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
('Marwan', 'gobo@email.com', 0551554555, 1, true, true, 'Marwan Note', 50,40,2,'Week','2012-04-25'),
('Hashem', 'hashem@email.com', 0551534555, 1, true, false, 'Note',50,100,2,'Appointment','2012-04-25'),
('Farid', 'farid@email.com', 0551254555, 1, true, false, 'Note',50,25,1,'Month',null),
('Khalid', 'khalid@email.com', 0531554555, 1, true, true, 'Note',90,40,2,'Week','2012-04-25');


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

INSERT INTO payment_settings (userid, currency,request_payment_every_value,request_payment_very_unit)
VALUES 
(1, null , 2,'Month'),
(2, 'ILS', 5,'Week'),
(3, 'EUR', 6,'Month'),
(4, 'CNY', 1,'Appointment');





INSERT INTO reports (userid,creatingdate,pdfile) VALUES 

 (1,'2012-04-25','pdflink/1st.pdf'),
 (1, '2012-04-26','pdflink/2nd.pdf'),
 (1, '2012-04-27','pdflink/3rd.pdf'),
 (1, '2012-04-28','pdflink/4th.pdf');


INSERT INTO users (first_name, last_name, email, username, password, phone, business_name,
  business_logo,
  crn,
  business_address)
VALUES 
('Morad', 'Abed','moraabed@email.com', 'morad', '$2b$10$iI423ND21pWJJ4/.swMyHurPxV4ARfCp/ykBWgYDybEp9Xm0qMVZq', '0500500506', 'Microsoft','http://morad_logo.jpg', '1234','1, Akko, Is'),
('Amir', 'Fahoum','amirfahoum@email.com', 'amir', '$2b$10$cBwqSI5PXeRDC2a1pfDQteAA.IV.bheNw7Diy1HP1WvQmwnB75ofu', '0544444444', 'Google','http://amir_logo.jpg', '444','1, Akko, Is');

COMMIT;

