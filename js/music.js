var element = document.getElementById("playPause");
var myAudio = document.getElementById("myAudio");
var isPlaying = false;
function togglePlay() {
    if (isPlaying) {
        myAudio.pause();
        element.classList.toggle("pause");
    } else {
        myAudio.play();
        element.classList.toggle("pause");
    }
};
myAudio.onplaying = function () {
    isPlaying = true;
};
myAudio.onpause = function () {
    isPlaying = false;
};

function volume() {
    var x = document.getElementById("volume").value;
    var audio = document.getElementById("myAudio");
    audio.volume = x/100;
}