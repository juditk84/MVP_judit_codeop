# JUDIT'S MODERN AND UP TO DATE MUSIC THEORY SITE

Hola! I'm gonna run you through my app and some setup ^^


## Getting things workingggg

Database setup:

After git cloning the repo, you should
1 .- create a .env file with this:

  DB_HOST=localhost
  DB_USER= insert yours here
  DB_NAME=mvpjudit
  DB_PASS= insert yours here

2 .- Replace the "insert yours here" with your info, 

3 .- CREATE DATABASE mvpjudit;
in mysql.

4 .- npm run migrate in the root folder of the project to populate the database from the init_db file.

5 .- i'm not sure if you have to (but surely you will because these things are ignored by GIT), but maybe you should:
    
    - npm install 98.css
    - npm install react-markdown

## The app

The app code is full of comments to guide you, but i'll be happy to answer any questions you have!

The app is a music theory learning little thing structured as follows:

- MainMenu. The main menu ^^ You can choose if you want to learn about Chords, Intervals or Scales.
- Theory. Once you pick your subject, you're taken to another page with 2 main things: slides and filters.
    - the slides come from a table in the database. They are written in markdown and read by the Markdown extension you installed before.
    - the filters set what chords, scales or intervals you want to practice. 
- Exercises. Here you have a cycle of 5 exercises. Each one has a sound associated to the "listen!" button and a staff and notes image that show you the chord/scale/interval you have to guess. You submit your answer by clicking on the button below that you consider to be the right answer. The app keeps track of your hits and misses and displays them in the RESULTS page.
- Results. You can view your results and decide if you want to try again or go to the main menu.

And that's all! ^^