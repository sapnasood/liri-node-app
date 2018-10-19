
// **********************************************************************************************************
// Function to display event details for the an artist provided by user
// ***********************************************************************************************************
const bandDetails = function (band, result) {
  const request = require("request");
  require('dotenv').config();

// Import spotify developer id and secret code
const keyS = require("./keys.js");
  request(`https://rest.bandsintown.com/artists/${band}/events?app_id=${keyS.band_api}`, function (err, res, body) {

    if (err) {
      return console.log('Error occurred: ' + err);
    }

    let obj = JSON.parse(body);
   
    if (obj.length > 0) {
      console.log("===========================Event Details=====================================================");
      console.log(`Venu Name : ${obj[0].venue.name}`);
      result.push(`Venu Name : ${obj[0].venue.name}`);
      console.log(`Venu Location : ${obj[0].venue.country}  ${obj[0].venue.city} `);
      console.log("=============================================================================================");
      result.push(`Venu Location : ${obj[0].venue.country}  ${obj[0].venue.city} `)
      writeLog(result);
    }
    else {
      console.log("===========================Event Details=====================================================");
      console.log(`No upcoming events for ${band}`);
      result.push(`No upcoming events for ${band}`);
      writeLog(result);
    };
   

  });

};

// ****************************************************************************************************************
// Function to get song details for the track provided by user
// ****************************************************************************************************************
const songDetails = function (song, result) {
  require('dotenv').config();

// Import spotify developer id and secret code
const keyS = require("./keys.js");

  if (!song) {
    song = "What's My Age Again";
  };

  // require('dotenv').config();

  // // Import spotify developer id and secret code
  // const keySpotify = require("./keys.js");
  // Import node-spotify-api package
  const Spotify = require("node-spotify-api");

  const spotify = new Spotify({
    id: keyS.id,
    secret: keyS.secret
  });

  spotify.search({ type: 'track', query: `${song}`, limit: 1 }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    //  console.log(data.tracks.items[0]);
    console.log("============================Song Details=====================================================");
    console.log(`Album : ${data.tracks.items[0].album.name}`);
    result.push(`Album : ${data.tracks.items[0].album.name}`);
    console.log(`A preview link of the song  : ${data.tracks.items[0].preview_url}`);
    result.push(`A preview link of the song  : ${data.tracks.items[0].preview_url}`);
    console.log(`Song name  : ${data.tracks.items[0].name}`);
    result.push(`Song name  : ${data.tracks.items[0].name}`);
    // console.log(data.tracks.items[0].album.artists[0]);
    console.log("==============================================================================================");
    // console.log(result);
    writeLog(result);
  });

};

// ****************************************************************************************************************
// Function to get movie details for the track provided by user
// ****************************************************************************************************************
const movieDetails = function (movie, result) {
  require('dotenv').config();

// Import spotify developer id and secret code
const keyS = require("./keys.js");
  
  if (!movie) {
    movie = "Mr. Nobody";
  };
  const request = require("request");
  console.log(`http://www.omdbapi.com/?apikey=${keyS.omdb_api}&t=${movie}`);
  request(`http://www.omdbapi.com/?apikey=${keyS.omdb_api}&t=${movie}`, function (err, res, body) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }


    const obj = JSON.parse(body);
    console.log("============================Movie Details=====================================================");
    console.log(`Movie Title: ${obj.Title}`);
    result.push(`Movie Title: ${obj.Title}`)
    console.log(`Movie Year: ${obj.Year}`);
    result.push(`Movie Year: ${obj.Year}`);
    console.log(`IMDB Rating : ${obj.imdbRating}`);
    result.push(`IMDB Rating : ${obj.imdbRating}`);
    console.log(`Rotten Tomatoes rating: ${obj.Ratings[1].Value}`);
    console.log(`Country where the movie was produced : ${obj.Country}`);
    result.push(`Country where the movie was produced : ${obj.Country}`);
    console.log(`Language of the movie : ${obj.Language}`);
    result.push(`Language of the movie : ${obj.Language}`);
    console.log(`Plot of the movie : ${obj.Plot}`);
    result.push(`Plot of the movie : ${obj.Plot}`);
    console.log(`Actors in the movie : ${obj.Actors}`);
    result.push(`Actors in the movie : ${obj.Actors}`);
    console.log("===============================================================================================");
    writeLog(result);
  });


};


// ****************************************************************************************************************
// Function to call one of LIRI's commands written in random.txt file
// ****************************************************************************************************************
const doWhat = function (result) {
  const fs = require('fs');

  fs.readFile("random.txt", 'utf8', function (error, data) {
    if (error) {
      return console.log('Error occurred: ' + error);
    };
    const dataList = data.split(",");
    if (dataList[0] === "concert-this") {
      bandDetails(dataList[1], result);

    }
    else if (dataList[0] === "spotify-this-song") {
      songDetails(dataList[1], result);

    }

    else if (dataList[0] === "movie-this") {
      movieDetails(dataList[1], result);

    };

  });

};

// ****************************************************************************************************************
// Function to write terminal output into Log file
// ****************************************************************************************************************
const writeLog = function(result){
 const fs = require("fs");
//  console.log(result);
 fs.appendFile("log.txt", `${result}`, function(error){
   if(error){
    console.log(err);
   };
 });

};

// Exporting all the functions define
module.exports = {
    bandDetails:  bandDetails,
    songDetails: songDetails,
    movieDetails: movieDetails,
    doWhat: doWhat
};