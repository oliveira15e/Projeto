var audio = document.getElementById("myAudio");

// Inicia a reprodução automática da música
audio.autoplay = true;

function pauseAudio() {
  audio.pause();
}

function setVolume(volume) {
  audio.volume = volume;
}
