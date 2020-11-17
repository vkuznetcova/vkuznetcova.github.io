
let video = document.getElementById('video'),
    button = document.getElementsByClassName('video-btn')[0],
    txt = document.getElementsByClassName('video-wrp')[0];

button.addEventListener("click", function () {
    video.play()
    video.setAttribute("controls", "controls");
    txt.style.display='none';
});

