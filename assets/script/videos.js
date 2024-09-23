let video = document.getElementById('video')

function video1() {
    video.src = "//www.youtube.com/embed/b-fq079VQVM"
    video.play();
}

function video2() {
    video.src = "//www.youtube.com/embed/vuf4eSfjWVY"
    video.play();
}

function video3() {
    video.src = "//www.youtube.com/embed/tZk1GZkewuQ"
    video.play();
}

function video4() {
    video.src = "//www.youtube.com/embed/bTmGsvPIO8c"
    video.play();
}


let playbackButton = document.getElementsByClassName('playback')

for (let i = 0; i < 4; i++) {
    playbackButton[i].addEventListener('mouseover', ()=>{
        playbackButton[i].style.borderBottom = '30px solid white'
    })

    playbackButton[i].addEventListener('mouseout', ()=>{
        playbackButton[i].style.borderBottom = ' 30px solid #e60c80'
    })
}