

setInterval(() => {
    document.getElementById("clock").innerHTML =
        new Date().toLocaleTimeString();
}, 1000);

let music = document.getElementById("bg-music");
let btn = document.getElementById("music-btn");
let playing = false;

function toggleMusic() {
    if (!playing) {
        music.play();
        btn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        btn.innerHTML = "🎵 Play Music";
    }
    playing = !playing;
    music.volume = 0.4;
}