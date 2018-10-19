// Import all the function definitions exported in opertaion.js 
const operation = require("./operation.js");

// Array for holding the result of every search by user
let result = [];
// This argument decides what user wants to serach for
const choice = process.argv[2];

// This argument will hold artist name or track or a movie name provided by the user
let search = "";
if(process.argv[2] === "concert-this"){
  for(let i = 3; i < process.argv.length; i ++){
    search += process.argv[i];
   }
}
else
{
for(let i = 3; i < process.argv.length; i ++){
 search += process.argv[i] + " ";
}};
search.trim();

//Call bandDetails function for artist provided by user
if(choice === "concert-this"){
  operation.bandDetails(search, result);
}
//Call songDetails function for track provided by user
else if (choice === "spotify-this-song"){
  operation.songDetails(search, result);
}
//Call movieDetails function for movie provided by user
else if(choice === "movie-this"){
  operation.movieDetails(search, result);
}
//Call doWhat function when user say Yes for do-what-it-says option
else if (choice === "do-what-it-says"){
  operation.doWhat(result);
};






