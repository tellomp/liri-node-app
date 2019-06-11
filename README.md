# LIRI BOT

### Overview
* LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

* LIRI searches Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### Requirements and Instructions
* After  node.js command is ran by the user, a menu of all the command line options is shown. 


![alt text][clMenu]

[clMenu]: https://github.com/tellomp/liri-node-app/blob/master/images/clMenu.png "Command Line Menu"


* The ``` node liri.js concert <artist/band name here> ``` command searches the Bands in Town Artist Events API for the user input and renders the name of the venue, venue location, and date of the event to the terminal. 


![alt text][concert]

[concer]: https://github.com/tellomp/liri-node-app/blob/master/images/concert.png "Command Line Concert"


* The ```node liri.js spotify '<song name here>' ``` command searches the Spotify API for the user input and renders the artist, the song's name, a preview link of the song from Spotify, and the album that the song is from.


![alt text][spotify]

[concert]: https://github.com/tellomp/liri-node-app/blob/master/images/spotify.png "Command Line spotify"


* If no song is provided then your program will default to "Bohemian Rhapsody" by Queen

* node ```liri.js movie '<movie name here>' ``` command searches the OMDB API for the user input and renders the following to the terminal:  
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
  
  
![alt text][movie]

[movie]: https://github.com/tellomp/liri-node-app/blob/master/images/movie.png "Command Line movie"


* The node ``` liri.js do-what-it-says``` command outputs data for the song 'I Want it That Way.' Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

![alt text][justDoIt]

[justDoIt]: https://github.com/tellomp/liri-node-app/blob/master/images/doWhatItSays.png "Command Line do-what-it-says"

### App Demo
* Click here to view a demonstration of the app! 

### Technologies
* Javascript
* Node.js
* Spotify API
* OMDB API 
* Bands in Town Artist Events API
* Axios
* Colors NPM
* Moment NPM
* FS NPM
