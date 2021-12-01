DROP TABLE IF EXISTS test;

CREATE TABLE test (
     id SERIAL PRIMARY KEY, 
     name TEXT not null,
     osis TEXT not null,
        description TEXT not null,
       number INT NOT null,
         date TEXT
);
