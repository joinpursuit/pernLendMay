-- INSERT INTO test (name) VALUES
-- ('Monday'),
-- ('Tuesday'),
-- ('Wednesday'),
-- ('Thursday'),
-- ('Friday'),
-- ('Saturday'),
-- ('Sunday');
\c mileage_db;

INSERT INTO
    cars(make, model, vin, year, odometer, doors, is_default,uid, driver)
VALUES 
    ('Dodge','Charger','1234567890AUPMNTR',2005,90000,4,FALSE, 'abcd', 'Durdona'),
    ('Chevy','Impala','4544567890AUPMNTR',2010,50000,4,FALSE, 'efgh', 'Joshua'),
    ('Ford','Mustang','9894567890AUPMNTR',2015,30000,4,FALSE, 'ijkl', 'Damien');

