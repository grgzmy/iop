var Twitter = require('twitter');
var audio = require('play-sound')(opts = {});
var gpio = require('rpi-gpio');

gpio.setup(7, gpui.DIR_OUT, on);

function on(){
	gpio.write(7, true, function(err){

	});
	off();
}

function off(){
	setTimeout(function(){
		gpio.write(7, false, function(e){

		});
	}, 300);
}

var client = new Twitter({
	consumer_key: '8Dlnf4PptiG5E0ORifJaATFZD',
	consumer_secret: 'ZfdifaC4uhDmdKkWXo8sJPghIYkxFB9JRRsgVNZAX7iy2cH9ST',
	access_token_key: '25417797-6wad3IijVAVF01IhbfXgvREG80aQ2dVUDpB6I5Npl',
	access_token_secret: '6OqqvnkHktQCHuIeWPj6HPpIhxvhjL2OVk11ZZYvBu2p8'
});



function react(stream){
	console.log("connecting to twitter");
	stream.on('data', boo);
	stream.on('error', ohShit);
}

function boo(tweet){
	console.log('------------------')
	console.log(tweet.text);
	scream();
	on();
}

function ohShit(err){
	console.error(err.toString());
}

function scream(){
	var mp3 = Math.floor((Math.random()*4)+1).toString() + '.mp3';
	audio.play(mp3, function(err){
		//console.error("play threw");
	});
}

client.stream('/statuses/filter/', {track: 'sanders'}, react);