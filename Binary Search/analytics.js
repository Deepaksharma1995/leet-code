const INITIAL_WAIT = 3000;
const INTERVAL_WAIT = 10000;
const ONE_SECOND = 1000;

const events = ["mouseup", "keydown", "scroll", "mousemove"];

let startTime = Date.now();
let endTime = startTime + INITIAL_WAIT;
let totalTime = 0;
let clickcount = 0;
let buttonClicks = {
  total: 0,
};
let buttonClickCOunt = 0;
let linkClickCount = 0;
let keyPressCount = 0;
let scrollCount = 0;
let mouseMovementCount = 0;

setInterval(() => {
  if (!document.hidden && startTime <= endTime) {
    startTime = Date.now();
    totalTime += ONE_SECOND;
    document.getElementById("timer").innerText = totalTime;
  }
}, ONE_SECOND);

document.addEventListener("DOMContentLoaded", (e) => {
  document.getElementById("page").innerText = window.location.pathname;
  events.forEach((e) => {
    document.addEventListener(e, (event) => {
      endTime = startTime + INTERVAL_WAIT;
      if (e === "mouseup") {
        clickcount++;
        document.getElementById("click").innerText = clickcount;
        if (event.target.nodeName === "BUTTON") {
          if (!buttonClicks[event.target.innerText]) {
            buttonClicks[event.target.innerText] = 0;
          }
          buttonClicks[event.target.innerText]++;
          buttonClicks.total += 1;
        } else if (event.target.nodeName === "A") {
          linkClickCount++;
        } else if (e === "keydown") {
          keyPressCount++;
        } else if (e === "scroll") {
          scrollCount++;
        } else if (e === "mousemove") {
          mouseMovementCount++;
        }
      }
    });
  });
});
