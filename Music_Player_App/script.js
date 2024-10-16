const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
song.onloadedmetadata = function (){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    // TODO play() and pause() are asynchronous, so you have to do this.
    let playPromise = song.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
          song.pause();
        })}

    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }

    if (song.play()) {
        setInterval(() => {
            progress.value = song.currentTime;
        }, 500);
    }
}


progress.onchange = function () {
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");

}