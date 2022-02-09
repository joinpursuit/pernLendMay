DROP DATABASE IF EXISTS mileage_db;

CREATE DATABASE mileage_db;

\c mileage_db;

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

 CREATE TABLE
    expenses(
        id SERIAL PRIMARY key,
        expense_type TEXT NOT NULL,
        business_use BOOLEAN NOT NULL,
        car_id INT REFERENCES cars (id) ON DELETE CASCADE,
        amount_spent INT NOT NULL,
        date TEXT 
    );

CREATE TABLE
    trips(
        id SERIAL PRIMARY key,
        car_id INT REFERENCES cars (id) ON DELETE CASCADE,
        business_use BOOLEAN not null,
        miles INT NOT null,
        date TEXT,
        reason TEXT not null,	
        favorite BOOLEAN NOT NULL
    );

        --  start_odometer INT NOT null,
        -- stop_odometer INT NOT null,


--         // Heroku CLI
-- // heroku pg:psql postgresql-solid-18526 --app powerful-depths-91395


-- // \i ./db/schema.sql
-- // success should say CREATE TABLE
-- // \i ./db/seed.sql
-- // success should say INSERT 0 7
-- // \q



-- Host
-- ec2-44-193-111-218.compute-1.amazonaws.com
-- Database
-- d3q9oqslm6quq0
-- User
-- teravkraycmbrz
-- Port
-- 5432
-- Password
-- 55127d751023d83af2fefe56076780f12e7716bc1b69744178b26b9a87c37881
-- URI
-- postgres://teravkraycmbrz:55127d751023d83af2fefe56076780f12e7716bc1b69744178b26b9a87c37881@ec2-44-193-111-218.compute-1.amazonaws.com:5432/d3q9oqslm6quq0
-- Heroku CLI
-- heroku pg:psql postgresql-solid-18526 --app powerful-depths-91395
