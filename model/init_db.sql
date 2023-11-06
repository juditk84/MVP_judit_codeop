--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists exercicis;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE exercicis(
    id INT NOT NULL AUTO_INCREMENT, 
    tipus VARCHAR(40) not null, 
    subtipus VARCHAR(40) not null,
    imatge VARCHAR(100) not null,
    so VARCHAR(100) not null,
    completat BOOLEAN not null,
    PRIMARY KEY (id)
    );

INSERT INTO exercicis (tipus, subtipus, imatge, so, completat) VALUES ("acord", "triada_major", "./src/assets/images/triada_major.png", "./src/assets/sounds/triada_major.mp3", false)
INSERT INTO exercicis (tipus, subtipus, imatge, so, completat) VALUES ("acord", "triada_menor", "./src/assets/images/triada_menor.png", "./src/assets/sounds/triada_menor.mp3", false)