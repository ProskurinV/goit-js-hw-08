import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let parsedCurrentTime = 0;
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const onPlay = function ({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
d;
// ................

// let parsedCurrentTime = 0;

// function onPlay(event) {
//   localStorage.setItem('videoplayer-current-time', event.seconds);
// }

// const currentTime = localStorage.getItem('videoplayer-current-time');
// function timeHandler(currentTime) {
//   if (currentTime) {
//     parsedCurrentTime = JSON.parse(currentTime);
//   } else {
//     parsedCurrentTime = 0;
//   }
// }
// timeHandler(currentTime);

// player.setCurrentTime(parsedCurrentTime);
