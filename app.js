#!/usr/bin/env node

const ioHook = require('iohook');
const robot = require('robotjs');
const yargs = require('yargs');

const screenWidth = robot.getScreenSize().width;
const screenHeight = robot.getScreenSize().height;

const argv = yargs
  .options({
    'h': {
      alias: 'hor',
      describe: 'Horizontal speed of mouse',
      type: 'number',
      default: 10
    },
    'v': {
      alias: 'ver',
      describe: 'Vertical speed of mouse',
      type: 'number',
      default: 10
    }
  })
  .help()
  .version()
  .argv;

const speed = {
  x: argv.h,
  y: argv.v
};

ioHook.on('keydown', event => {
  if (event.keycode === 38 || event.keycode === 36 || event.keycode === 23 || event.keycode === 37) {
    if (event.keycode === 38) {
      speed.x++;
    } else if (event.keycode === 36) {
      speed.x--;
    } else if (event.keycode === 23) {
      speed.y++;
    } else if (event.keycode === 37) {
      speed.y--;
    }
    console.log(`Horizontal speed: ${speed.x} Vertical speed: ${speed.y}.`);
  } else if (event.keycode === 57419 || event.keycode === 57421 || event.keycode === 57416 || event.keycode === 57424) {
    const mouse = robot.getMousePos();
    if (event.keycode === 57419 && mouse.x > 0) {
      mouse.x -= speed.x;
    } else if (event.keycode === 57421 && mouse.x < screenWidth) {
      mouse.x += speed.x;
    } else if (event.keycode === 57416 && mouse.y > 0) {
      mouse.y -= speed.y;
    } else if (event.keycode === 57424 && mouse.y < screenHeight) {
      mouse.y += speed.y;
    }
    robot.moveMouse(mouse.x, mouse.y);
  }
});

ioHook.start();

console.log('Press L to increase horizontal speed.');
console.log('Press J to decrease horizontal speed.');
console.log('Press I to increase vertical speed.');
console.log('Press K to decrease vertical speed.');
console.log(`Horizontal speed: ${speed.x} Vertical speed: ${speed.y}.`);
