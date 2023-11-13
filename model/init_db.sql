--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists exercicis;
DROP TABLE if exists slides;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE exercicis(
    id INT NOT NULL AUTO_INCREMENT, 
    tipus VARCHAR(40) not null, 
    subtipus VARCHAR(40) not null,
    especie VARCHAR(40) not null,
    fonamental VARCHAR(1) not null,
    completat BOOLEAN not null,
    PRIMARY KEY (id)
    );

CREATE TABLE slides(
    id INT NOT NULL AUTO_INCREMENT,
    activityGroup VARCHAR(50),
    content VARCHAR(2000),
    pageNumber INTEGER,
    PRIMARY KEY (id)
    );

-- wanted to do this with a loop but I don't know how to do it in mysql.

INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "major", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "minor", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "dim", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "Maj7", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "m7", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "7th", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "m7b5", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "major", "d", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "minor", "d", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "dim", "d", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "Maj7", "d", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "m7", "d", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "7th", "d", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "m7b5", "d", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "major", "e", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "minor", "e", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "dim", "e", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "Maj7", "e", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "m7", "e", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "7th", "e", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "m7b5", "e", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "major", "f", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "minor", "f", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "dim", "f", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "Maj7", "f", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "m7", "f", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "7th", "f", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "m7b5", "f", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "major", "g", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "minor", "g", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "dim", "g", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "Maj7", "g", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "m7", "g", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "7th", "g", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "m7b5", "g", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "major", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "minor", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "dim", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "Maj7", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "m7", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "7th", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "m7b5", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "major", "b", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "minor", "b", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "triada", "dim", "b", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "Maj7", "b", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "m7", "b", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "7th", "b", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Chords", "quatriada", "m7b5", "b", false);

INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "maj2", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "min2", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "maj3", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "min3", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "perf4", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "dim4", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "aug4", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "perf5", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "dim5", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "aug5", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "maj6", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "min6", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "maj7", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "min7", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "octave", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "maj2", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "min2", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "maj3", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "min3", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "perf4", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "dim4", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "aug4", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "perf5", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "dim5", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "aug5", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "maj6", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "min6", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "maj7", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "min7", "a", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Intervals", "none", "octave", "a", false);

INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Scales", "major", "ionian", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Scales", "minor", "dorian", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Scales", "minor", "phrygian", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Scales", "major", "lydian", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Scales", "major", "mixolydian", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Scales", "minor", "aeolian", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Scales", "dim", "locrian", "c", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Scales", "major", "ionian", "e", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Scales", "minor", "dorian", "e", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Scales", "minor", "phrygian", "e", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Scales", "major", "lydian", "e", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Scales", "major", "mixolydian", "e", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Scales", "minor", "aeolian", "e", false);
INSERT INTO exercicis (tipus, subtipus, especie, fonamental, completat) VALUES ("Scales", "dim", "locrian", "e", false);



INSERT INTO slides (activityGroup, content, pageNumber) VALUES ("Chords", "This is some content", 1);
INSERT INTO slides (activityGroup, content, pageNumber) VALUES ("Chords", "This is some more content", 2);
INSERT INTO slides (activityGroup, content, pageNumber) VALUES ("Chords", "This is some more more content", 3);
INSERT INTO slides (activityGroup, content, pageNumber) VALUES ("Chords", "This is some more more more content", 4);