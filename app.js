#!/usr/bin/env node

const ioHook = require('iohook');
const robot = require('robotjs');
const yargs = require('yargs');

const screenWidth = robot.getScreenSize().width;
const screenHeight = robot.getScreenSize().height;

const argv = yargs
  .options({
    h: {
      alias: 'hor',
      describe: 'Horizontal speed of mouse',
      type: 'number',
      default: 10
    },
    v: {
      alias: 'ver',
      describe: 'Vertical speed of mouse',
      type: 'number',
      default: 10
    }
  })
  .help()
  .alias('help', 'H')
  .version()
  .alias('version', 'V')
  .argv;

const speed = {
  x: argv.h,
  y: argv.v
};

ioHook.on('keydown', event => {
  if (event.metaKey && event.altKey) {
    if (event.keycode === 28) {
      if (!event.shiftKey) {
        robot.mouseClick();
      } else {
        robot.mouseClick('right');
      }
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
    } else if (event.keycode === 38 || event.keycode === 36 || event.keycode === 23 || event.keycode === 37) {
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
    }
  }
});

ioHook.start();

console.log('Press Meta + Alt + Enter to left click.');
console.log('Press Meta + Alt + Shift + Enter to right click.');
console.log('Press Meta + Alt + arrow keys to move the mouse.');
console.log('Press Meta + Alt + L to increase horizontal speed.');
console.log('Press Meta + Alt + J to decrease horizontal speed.');
console.log('Press Meta + Alt + I to increase vertical speed.');
console.log('Press Meta + Alt + K to decrease vertical speed.');
console.log('Meta key is Windows / Command / Super key.');
console.log(`Horizontal speed: ${speed.x} Vertical speed: ${speed.y}.`);
