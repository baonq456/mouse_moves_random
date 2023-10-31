var robot = require('robotjs');

const randomInRange = (x) => {
  const from = x - 100;
  const to = x + 100;
  return Math.floor(Math.random() * (from - to + 1)) + to;
};

const checkMouseMovement = (mouse, currentMousePos) => {
  if (
    currentMousePos.x !== mouse.lastPos.x ||
    currentMousePos.y !== mouse.lastPos.y
  ) {
    resetCheckMouseMovement(mouse);
  } else {
    // mouse is stoped
    mouse.stopedSeconds += 1;
  }
};

const resetCheckMouseMovement = (mouse) => {
  mouse.lastPos = robot.getMousePos();
  mouse.stopedSeconds = 0;
};

const mouseMoveRandom = (width, height, mouse) => {
  const x = randomInRange(width);
  const y = randomInRange(height);
  robot.moveMouseSmooth(x, y);
  resetCheckMouseMovement(mouse);
};

module.exports = {
  randomInRange,
  mouseMoveRandom,
  checkMouseMovement,
  resetCheckMouseMovement,
};
