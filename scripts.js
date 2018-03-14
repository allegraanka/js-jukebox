var jboxAudio = document.getElementById('jbox-audio');
var jboxPlayButton = document.getElementById('jbox-play-button');
var jboxSkipButton = document.getElementById('jbox-skip-button');

function Jukebox() {
  jboxAudio = document.getElementById('jbox-audio'),
  jboxPlayButton = document.getElementById('jbox-play-button'),
  jboxSkipButton = document.getElementById('jbox-skip-button'),
  songs = [{
    id: 0,
    url: "songs/walls.mp3"
  }, {
    id: 1,
    url: "songs/even-bees.mp3"
  }],
  currentSong = 0;
    function playSong() { // play function
      jboxAudio.src = this.songs[this.currentSong].src;
    }
    nextSong = function() { // skips to the next song
      this.currentSong++;
      this.playSong();
    }
  }

  function switchState() { //toggles play/stop button
    if (jboxAudio.paused == true) {
      jboxAudio.play();
      jboxPlayButton.innerHTML = 'stop';
    } else {
      jboxAudio.pause();
      jboxPlayButton.innerHTML = 'play';
    }
  }

jboxPlayButton.addEventListener('click', switchState, false);

window.onload = Jukebox();
