BEGIN;

DROP TABLE IF EXISTS customers CASCADE;

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone INTEGER UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  userid INTEGER NOT NULL,
  paymentStatus BOOLEAN NOT NULL,
  activityStatus BOOLEAN NOT NULL,
  notes VARCHAR,
  balance DECIMAL NOT NULL
);

INSERT INTO customers (name, email, phone, password, userid, paymentStatus, activityStatus, notes, balance)
VALUES 
('Marwan', 'gobo@email.com', 0551554555, 123456, 1, true, true, '', 50),
('Hashem', 'hashem@email.com', 0551534555, 123456, 1, true, true, '', 50),
('Farid', 'farid@email.com', 0551254555, 123456, 1, true, true, '', 50),
('Khalid', 'khalid@email.com', 0531554555, 123456, 1, true, true, '', 50);


COMMIT;

