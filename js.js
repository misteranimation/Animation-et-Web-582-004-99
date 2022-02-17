const lecteurVideo = document.querySelector("video");

const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector(".stop");

btnPlay.addEventListener("click", function(){
  lecteurVideo.play();
    console.log(lecteurVideo.paused);
});

btnPause.addEventListener("click", function(){
  lecteurVideo.pause();
  console.log(lecteurVideo.paused);
});

btnStop.addEventListener("click", function(){
  lecteurVideo.pause();
  lecteurVideo.currentTime =0;
});

console.log(lecteurVideo.duration);
console.log(lecteurVideo.currentTime);

lecteurVideo.playbackRate = 1.1;