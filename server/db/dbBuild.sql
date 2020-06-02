BEGIN;

DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS appointments CASCADE;
DROP TYPE IF EXISTS payment_unit CASCADE;


CREATE TYPE payment_unit AS ENUM ('Week','Appointment','Month');


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

INSERT INTO customers (name, email, phone, userid, paymentStatus, activityStatus,
  notes, 
  balance,
  appointmentPrice,
  paymentEveryValue,
  paymentEveryUnit,
  balanceValidUntil)
VALUES 
('Marwan', 'gobo@email.com', 0551554555, 1, true, true, '', 50,40,2,'Week','2012-04-25'),
('Hashem', 'hashem@email.com', 0551534555, 1, true, true, '',50,100,2,'Appointment','2012-04-25'),
('Farid', 'farid@email.com', 0551254555, 1, true, true, '',50,25,1,'Month',null),
('Khalid', 'khalid@email.com', 0531554555, 1, true, true, '',90,40,2,'Week','2012-04-25');


INSERT INTO appointments (userid, day, start_at, end_at, note)
VALUES 
(1, '2012-04-25', '08:00:00', '10:00:00','Note 1'),
(1, '2012-04-25', '09:00:00', '11:00:00','Note 2'),
(1, '2012-04-25', '12:00:00', '14:00:00','Note 3'),
(1, '2012-04-25', '20:00:00', '21:00:00','Note 4');

INSERT INTO appointments_customers (customerid, appintmentid)
VALUES 
( 1, 1),
( 2, 2),
( 3, 3),
( 4, 3);

COMMIT;

