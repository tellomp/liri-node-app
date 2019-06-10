# LIRI BOT

### Overview
* LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

* LIRI searches Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### Instructions
* After  node.js command is ran by the user, a menu of all the command line options is shown.  

* The ``` node liri.js concert <artist/band name here> ``` searches the Bands in Town Artist Events API for the user input and renders the name of the venue, venue location, and date of the event to the terminal. 

* The ```node liri.js spotify '<song name here>' ``` searches the Spotify API for the user input and renders the artist, the song's name, a preview link of the song from Spotify, and the album that the song is from.

** If no song is provided then your program will default to "Same Old Blues" by Phantogram

* node ```liri.js movie '<movie name here>' ```  searches the OMDB API for the user input and renders the following to the terminal:
   ** Title of the movie.
   ** Year the movie came out.
   ** IMDB Rating of the movie.
   ** Rotten Tomatoes Rating of the movie.
   ** Country where the movie was produced.
   ** Language of the movie.
   ** Plot of the movie.
   ** Actors in the movie.

* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'




node liri.js do-what-it-says




Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Edit the text in random.txt to test out the feature for movie-this and concert-this.


Moment
DotEnv

### Requirements
