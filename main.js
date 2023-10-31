// Move the mouse across the screen as a sine wave.
var robot = require('robotjs');
const { checkMouseMovement, mouseMoveRandom } = require('./utils/mouse.util');

const { mouse } = require('./store/mouse.store');
const {
  MOUSE_INTERVAL,
  MAX_STOPED_SECONDS,
} = require('./constant/mouse.constant');
mouse.lastPos = robot.getMousePos();

// Speed up the mouse.
robot.setMouseDelay(2);

var screenSize = robot.getScreenSize();
var height = Math.round(screenSize.height / 2);
var width = Math.round(screenSize.width / 2);

setInterval(function () {
  checkMouseMovement(mouse, robot.getMousePos());

  if (mouse.stopedSeconds > MAX_STOPED_SECONDS) {
    mouseMoveRandom(width, height, mouse);
  }
  console.log(mouse.stopedSeconds)
}, MOUSE_INTERVAL);
