var Twitter = require('twitter');
//var audio = require('play-sound')(opts = {});
var audio = require('omxcontrol');
var gpio = require('rpi-gpio');
var gpio_number = 7;

gpio.setup(gpio_number, gpio.DIR_OUT, off);

function on(){
	gpio.write(gpio_number, true, turnOff);
}

function turnOff(){
	setTimeout(off, 300);
}

function off(){
	gpio.write(gpio_number, false);
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
	audio.start(mp3);
}

client.stream('/statuses/filter/', {track: 'javascript'}, react);
