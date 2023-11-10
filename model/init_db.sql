--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists acords;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE acords(
    id INT NOT NULL AUTO_INCREMENT, 
    tipus VARCHAR(40) not null, 
    subtipus VARCHAR(40) not null,
    especie VARCHAR(40) not null,
    fonamental VARCHAR(1) not null,
    completat BOOLEAN not null,
    PRIMARY KEY (id)
    );

-- wanted to do this with a loop but I don't know how to do it in mysql.

INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "major", "c", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "minor", "c", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "dim", "c", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "Maj7", "c", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "m7", "c", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "7th", "c", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "m7b5", "c", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "major", "d", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "minor", "d", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "dim", "d", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "Maj7", "d", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "m7", "d", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "7th", "d", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "m7b5", "d", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "major", "e", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "minor", "e", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "dim", "e", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "Maj7", "e", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "m7", "e", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "7th", "e", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "m7b5", "e", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "major", "f", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "minor", "f", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "dim", "f", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "Maj7", "f", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "m7", "f", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "7th", "f", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "m7b5", "f", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "major", "g", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "minor", "g", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "dim", "g", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "Maj7", "g", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "m7", "g", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "7th", "g", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "m7b5", "g", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "major", "a", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "minor", "a", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "dim", "a", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "Maj7", "a", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "m7", "a", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "7th", "a", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "m7b5", "a", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "major", "b", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "minor", "b", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "triada", "dim", "b", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "Maj7", "b", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "m7", "b", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "7th", "b", false);
INSERT INTO acords (tipus, subtipus, especie, fonamental, completat) VALUES ("acord", "quatriada", "m7b5", "b", false);
