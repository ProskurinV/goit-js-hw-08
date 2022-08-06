import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let parsedCurrentTime = 0;
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

function onPlay({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}

function timeHandler(currentTime) {
  if (currentTime) {
    parsedCurrentTime = JSON.parse(currentTime);
  } else {
    parsedCurrentTime = 0;
  }
}

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
timeHandler(currentTime);
