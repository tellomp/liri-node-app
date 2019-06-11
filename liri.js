require('dotenv').config();
var axios = require('axios');
var Spotify = require('node-spotify-api');
var keys = require('./key')
var moment = require ('moment')
var fs = require('fs');
const list = require('./list');
const colors = require('colors');
var command = process.argv[2];
var input = process.argv.slice(3).join(" ");



switch (command) {

    case "spotify":
        spotifyThis(input)
        break;
    case "movie":
        movieLookup(input)
        break;
    case "concert":
        findConcert(input)
        break;
    case "do-what-it-says":
        justDoIt(input)
        break;
    default:
    list();
    console.log(colors.bold.white("please write one of the commands from the menu"))
        
}

function spotifyThis(spotifySearch) {
    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });
    //  * If no song is provided then your program will default to "Bohemian Rhapsody" by Queen
    if (spotifySearch === undefined || null) {
        spotifySearch = "Bohemian Rhapsody";
    }
    spotify.search({ type: 'track', query: spotifySearch }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        else {
            for (i = 0; i < data.tracks.items.length && i < 5; i++) {
                var musicQuery = data.tracks.items[i];
                console.log("\n ♫♪.ılılıll|lılılı.♫♪♫♪.ılılıll|lılılı.♫♪♫♪.ılılıll|lılılı.♫♪");
                // * Artist(s)
                console.log(colors.bold.green("Artist: " + musicQuery.artists[0].name) +
                    // * The song's name
                    colors.bold.white("\nSong Name: " + musicQuery.name) +
                    //* The album that the song is from
                    colors.bold.green("\nAlbum Name: " + musicQuery.album.name) +
                    "\n ═══════════════════════════════════════════════════════════");
            }
        };
    });
}


function movieLookup(movie) {

    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function (response) {
            console.log(colors.bold.yellow('\n═══════════════════════════════════════════════════════════'));
            console.log(colors.cyan("\n Movie name: " + response.data.Title))
            console.log(colors.cyan("Release Year: " + response.data.Year))
            console.log(colors.cyan("Rated: " + response.data.Rated))
            console.log(colors.cyan("Language: " + response.data.Language))
            console.log(colors.cyan("Country:" + response.data.Country))
            console.log(colors.cyan("Plot: " + response.data.Plot))
            console.log(colors.cyan("Actors: " + response.data.Actors)) +
            console.log(colors.bold.yellow('\n═══════════════════════════════════════════════════════════'))
        }
    );
}

function findConcert(artist) {

    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp" + "&date=upcoming";
    axios.get(queryUrl).then(

        function (response) {
            console.log("\n ¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸");
            // Output name of venue
            console.log(colors.bold.red("\n Name of the Venue: ", response.data[0].venue.name))
            // Output venue's city
            console.log(colors.bold("Venue's City: ", response.data[0].venue.city))
            //output venue's country
            console.log(colors.bold.red("Country: ", response.data[0].venue.country))
            // Output date of event per venue
            var date = response.data[0].datetime
            var prettyDate = moment(date).format("MMM Do YYYY");   
            console.log(colors.bold("Date of Event: " + prettyDate))
             // Output date of event per venue
             console.log("\n ¸♬·¯·♩¸¸♪·¯·♫¸¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸");

        })
}

function justDoIt() {
    
    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }
        var justDoItArray = data.split(",");
        console.log(justDoItArray);
        
    });
}

