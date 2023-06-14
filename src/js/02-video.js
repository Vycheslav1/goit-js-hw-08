import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

let throttle = require('lodash.throttle');

const player = new Player(iframe.id, {
    id: 236203659,
    width: 640,
    height:360
});


player.getDuration().then((data)=>localStorage.setItem("videoplayer-current-duration",JSON.stringify(data)));

let duration=JSON.parse(localStorage.getItem("videoplayer-current-duration"));

let time=localStorage.getItem("videoplayer-current-time");


if(Number.parseInt(Math.abs(time-duration))===0) {

    time=0;

}
function TimeUpdate () {

    
          player.getCurrentTime().then((data) => localStorage.setItem("videoplayer-current-time",data)).catch(function(error) {
          
              console.log(error.message);
      
          });
      
                
  }
  
player.on('timeupdate', throttle(TimeUpdate,1000));

player.setCurrentTime(time).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
    
});

