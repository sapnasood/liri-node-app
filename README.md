#LIRI 
LIRI is a _Language_ Interpretation and Recognition Interface which will be a command line node app that takes in parameters in below format and gives back search results.

#To get concert details for an Artists
If a user wish to know the future concerts of a given artist he/she should follow the below steps to run LIRI app
1. Type ---> node liri.js concert-this <Artist name user is interested in>
2. Hit enter
3. LIRI will provide the venu name and venu location

#To get song details for a given track
1. Type ---> node liri.js spotify-this-song <track>
2. Hit enter
3. LIRI will provide album name, song name and preview_url as an output
4. If user will not provide the track then LIRI will provide details for song "I Want it That Way," 

#To get movie details 
1. Type----> node liri.js movie-this <movie name>
2. Hit enter
3. LIRI will provide title of the movie, year the movie was released, IMDB rating, Rotten Tomatoes rating, country, language, plot and actors in the movie as an output
4. If no movie is entered by the user LIRI will dispaly details for Mr. Nobody 

#do-what-it-says 
This option will provide the details of the action specified by the user in random.txt file
1. Type---> node liri.js do-what-it-says
2. Hit enter
3. LIRI will display the details of one of the top 3 actions specified in the random.txt file

LIRI app will also save all the search results by the user in log.txt file