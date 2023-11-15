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

I wanted to give it a retro look and make you feel like the connection is gonna break when your mother picks up the phone like it's 1998. Hope you like it!

## THINGS I WOULD HAVE LOOOOVED TO DO (but oh my no time no time)

- The app relies on A LOT on assets, mostly images (that I had to do one by one grrr) and sounds (that I also did one by one and took a lot of time)... I would have loved to build a system (maybe on CSS) that builds a staff, cleff and notes and moves them according to what exercise you are doing, but only now after the mvp i'm starting to get css, so it's gonna be a future project.

- Some css quirks have to be fixed. I'm still confused with absolute/relative, centering stuff (eventually things center after using the 15.667 ways you can center something), size of windows changing, etc etc etc

- better slides for the theory part. omg I rushed yesterday to write something that made some sense, but i'm sure they are the most confusing thing.

- I would really LOOOOVE to do the styling so you can grab the windows and move them around, and maybe add some desktop icons. Also, the minimize/close buttons in the toolbars are just for decoration now, but if I had more time I would make them usable.
