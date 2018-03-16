var audio = document.getElementsByClassName('songs');
var playButton = document.getElementById('play');
var skipPrevButton = document.getElementById('skipPrev');
var skipNextButton = document.getElementById('skipNext');
var songTitle = document.getElementById('songTitle');
var currentSong = 0;

function Song(title, artist, src) {
  this.title = title,
  this.artist = artist,
  this.src = src
}

var futureMe = new Song("Future Me", "Worriers", 'songs/future-me.mp3');
var notYourType = new Song("Not Your Type", "Worriers", 'songs/not-your-type.mp3');

function Jukebox(songs = []) {
  this.songs = songs,
  this.currentSong = 0,
  this.addSong = function(s) {
  this.songs.push(s);
 }
}

  Jukebox.prototype.playSong = function() {
    songs.src = this.songs[this.currentSong.src];
    songTitle.innerHTML = "now playing: " + this.songs[this.currentSong.title] + " " + "by: " + this.songs[this.currentSong.artist];
    this.play();
}

  Jukebox.prototype.skipNext = function() {
    this.currentSong++;
    this.currentSong %= this.songs.length;
    songs.src = this.songs[this.currentSong.src];
    this.play();
}

  Jukebox.prototype.skipPrev = function() {
    this.currentSong--;
    this.currentSong %= this.songs.length;
    songs.src = this.songs[this.currentSong.src];
    this.play();
}

  Jukebox.prototype.stopSong = function() {
    songs.pause();
    songs.currentTime = 0;
}

var myJukebox = new Jukebox();

myJukebox.addSong(futureMe);
myJukebox.addSong(notYourType);

 function switchState() { //toggles play/stop button
   if (songs.paused == true) {
     songs.play();
     playButton.innerHTML = 'pause';
   } else {
     songs.pause();
     playButton.innerHTML = 'play';
   }
 }

window.onload = myJukebox.playSong();
