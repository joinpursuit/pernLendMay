DROP TABLE IF EXISTS test;

CREATE TABLE test (
    id SERIAL PRIMARY KEY, 
     osis TEXT not null,
        description TEXT not null,
       number TEXT not null,
        year INT not null,
);



CREATE TABLE
    test(
        id SERIAL PRIMARY key,
        make TEXT not null,
        model TEXT not null,
        vin TEXT not null,
        year INT not null,
        odometer INT, 
        doors INT,
        is_default BOOLEAN NOT NULL,
        uid TEXT not null,
        driver TEXT not null
    );