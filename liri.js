var argument= process.argv[2];
var term= process.argv[3];
//------------DO WHAT I SAY--------------------------------------------
if (argument==="do-what-i-say"){
	var fs= require('fs');
	fs.readFile("random.txt", "utf8", function (err,data){
		var arr= data.split(',');
		var term= arr[1];
		spotify(term);
	});
//----------------------------------------------------------------------
//-------------------Spotify--------------------------------------------
}else if(argument=== 'spotify-this-song'){
spotify(term);
function spotify (term) {
	// body...
var spotify = require('spotify');
 if( term==null){
 	term="What's my age again?";
 }
spotify.search({ type: 'track', query: term }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 	var capture= data.tracks.items[0];

 	var song= capture.name;
 	var artist= capture.artists[0].name;
 	var album= capture.album.name;
 	var link= capture.external_urls.spotify;

 	console.log(song);
 	console.log(artist);
 	console.log(album);
 	console.log(link);
 	console.log( );
 
});
};
//----------------------------------------------------------------
} else if (argument=== 'mytweets'){
//---------------------twitter------------------------------------
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'q3pyeh7nbhEwq8rfuZwRmmWLO',
  consumer_secret: 'LUSzfMCi3iCVcuXSoUDJMQtPkti6BGef2LldTOMe7B48aNGDGZ',
  access_token_key: '794013157-2iRtE5Jq9TVNbw1QYOxvIjjjESO8U3qVCxicF0Iw',
  access_token_secret: 'Evf0vcuntxRRr5OmhaUFyialHlHlHJoBsDdKWQWhZ7eyh'
});
 
var params = {screen_name: 'Lou_Ritter'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
   // console.log(tweets);
   for(i=0; i<20; i++){
   		console.log(tweets[i].text);
   		console.log( );
   }
 
  }
});
//--------------------------------------------------------
}else if(argument=== 'movie-this'){
	if(term==null){
 	term="Mr.Nobody";
 }
//-----------------------OMDB-----------------------------
var omdb = require('omdb');
omdb.search(term, function(err, movies) {

    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
 	var movieName= movies[0].title;
 	var movieYear= movies[0].year;
 	
 	// console.log(movieName);
 	// console.log(movieYear);
 	// console.log( );

 	omdb.get({ title: movieName, year: movieYear }, true, function(err, movie) {
    if(err) {
        return console.error(err);
    }
 
    if(!movie) {
        return console.log('Movie not found!');
    }
 	var title= movie.title;
 	var year= movie.year;
 	var imdb= movie.imdb.rating;
 	var countries= movie.countries;
 	var plot= movie.plot;
 	var actors= movie.actors;
 	var rotten= movie.rotten;

 	console.log(title);
 	console.log(year);
 	console.log(imdb);
 	console.log(countries);
 	console.log(plot);
 	console.log(actors);
 	console.log(rotten);
    });
});
//--------------------------------------------------------------------
}else{
	console.log("I do not understand your command");
};