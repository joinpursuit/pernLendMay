DROP TABLE IF EXISTS cars CASCADE;
-- DROP TABLE IF EXISTS expenses;
--  DROP DATABASE IF EXISTS mileage_db;

-- CREATE DATABASE mileage_db;

-- \c mileage_db;

CREATE TABLE
    cars(
        id SERIAL PRIMARY key,
        make TEXT not null,
        model TEXT not null,
        vin TEXT not null,
        year INT not null,
        odometer INT not null, 
        doors INT not null,
        is_default BOOLEAN NOT NULL,
        uid TEXT not null,
        driver TEXT not null
    );

--  CREATE TABLE
--     expenses(
--         id SERIAL PRIMARY key,
--         expense_type TEXT NOT NULL,
--         business_use BOOLEAN NOT NULL,
--         car_id INT REFERENCES cars (id) ON DELETE CASCADE,
--         amount_spent INT NOT NULL,
--         date TEXT
--     );

-- CREATE TABLE
--     trips(
--         id SERIAL PRIMARY key,
--         car_id INT REFERENCES cars (id) ON DELETE CASCADE,
--         business_use BOOLEAN not null,
--         miles INT NOT null,
--         date TEXT,
--         reason TEXT NOT NULL,	
--         favorite BOOLEAN NOT NULL
--     );
   
-- DROP DATABASE IF EXISTS mileage_db;

-- CREATE DATABASE mileage_db;

-- \c mileage_db;

-- CREATE TABLE
--     cars(
--         id SERIAL PRIMARY key,
--         make TEXT not null,
--         model TEXT not null,
--         vin TEXT not null,
--         year INT not null,
--         odometer INT not null, 
--         doors INT not null,
--         is_default BOOLEAN NOT NULL,
--         uid TEXT not null,
--         driver TEXT not null
--     );

-- DROP TABLE IF EXISTS expenses;

--  CREATE TABLE
--     expenses(
--         id SERIAL PRIMARY key,
--         expense_type TEXT NOT NULL,
--         business_use BOOLEAN NOT NULL,
--         car_id INT REFERENCES cars (id) ON DELETE CASCADE,
--         amount_spent TEXT NOT NULL,
--         date TEXT 
--     );

-- DROP TABLE IF EXISTS trips;

-- CREATE TABLE
--     trips(
--         id SERIAL PRIMARY key,
--         car_id INT REFERENCES cars (id) ON DELETE CASCADE,
--         business_use BOOLEAN not null,
--         miles INT NOT null,
--         date TEXT,
--         reason TEXT not null,	
--         favorite BOOLEAN NOT NULL
--     );



-- DROP DATABASE IF EXISTS mileage_db;

-- CREATE DATABASE mileage_db;

-- \c mileage_db;

-- CREATE TABLE
--     cars(
--         id SERIAL PRIMARY key,
--         make TEXT not null,
--         model TEXT not null,
--         vin TEXT not null,
--         year INT not null,
--         odometer INT not null, 
--         doors INT not null,
--         is_default BOOLEAN NOT NULL,
--         uid TEXT not null,
--         driver TEXT not null
--     );

--  CREATE TABLE
--     expenses(
--         id SERIAL PRIMARY key,
--         expense_type TEXT NOT NULL,
--         business_use BOOLEAN NOT NULL,
--         car_id INT REFERENCES cars (id) ON DELETE CASCADE,
--         amount_spent INT NOT NULL,
--         date TEXT 
--     );

-- CREATE TABLE
--     trips(
--         id SERIAL PRIMARY key,
--         car_id INT REFERENCES cars (id) ON DELETE CASCADE,
--         business_use BOOLEAN not null,
--         miles INT NOT null,
--         date TEXT,
--         reason TEXT not null,	
--         favorite BOOLEAN NOT NULL
--     );