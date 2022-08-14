import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function setLocaleStorage({ seconds }) {
   localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
};

const currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

player.setCurrentTime(currentTime || 0);


player.on("timeupdate", throttle(setLocaleStorage, 500)); 