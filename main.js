// Move the mouse across the screen as a sine wave.
var robot = require('robotjs');

// Speed up the mouse.
robot.setMouseDelay(2);

function randomInRange(x) {
  const from = x - 100;
  const to = x + 100;
  return Math.floor(Math.random() * (from - to + 1)) + to;
}

var screenSize = robot.getScreenSize();
var height = Math.round(screenSize.height / 2);
var width = Math.round(screenSize.width / 2);

// Move the mouse randomly every 10 seconds
setInterval(() => {
  // const { x, y } = robot.getMousePos();
  const x = randomInRange(width);
  const y = randomInRange(height);
  robot.moveMouse(x, randomInRange(y));
}, 10000);
