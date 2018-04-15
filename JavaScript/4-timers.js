'use strict';

const timers = require('timers');

console.log(Object.keys(timers));

console.log(
  'setTimeout === timers.setTimeout = ' +
  (setTimeout === timers.setTimeout)
);

console.dir({ setTimeout: setTimeout(() => {}, 0) });
console.log({ setInterval: setInterval(() => {}, 0) });
console.log({ setImmediate: setImmediate(() => {}) });
console.log({ nextTick: process.nextTick(() => {}) });
