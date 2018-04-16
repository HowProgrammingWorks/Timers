'use strict';

const timers = require('timers');

console.log(Object.keys(timers));

console.log(
  'setTimeout === timers.setTimeout = ' +
  (setTimeout === timers.setTimeout)
);

console.dir({ setTimeout: setTimeout(() => {}, 0) });
console.dir({ setInterval: setInterval(() => {}, 0) });
console.dir({ setImmediate: setImmediate(() => {}) });
console.dir({ nextTick: process.nextTick(() => {}) });
