var vid = document.getElementById('video-block')

let play = () => 
  vid.paused ?
  vid.play() :
  vid.pause()


let mute_unmute = () =>
  !vid.muted ?
  vid.muted = true :
  vid.muted = false

let expc = () => 
  vid.width <= 400 ?
  vid.width = vid.width * 2 :
  vid.width = vid.width / 2

let volumeup = () => {
  vid.volume < 1 ? vid.volume = vid.volume + .2 :
  vid.volume = vid.volume = 1;
}

let volumedown = () => {
  vid.volume >= .2 ? vid.volume = vid.volume - .2 :
  vid.volume = vid.volume = 0
}
 
let fscr = () => 
  vid.requestFullscreen() 

