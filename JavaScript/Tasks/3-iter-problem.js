'use strict';

// Task: fix given code to prevent removing items from
// `electronics` array and to stop iteration after last item

const { setInterval } = require('node:timers/promises');

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

(async () => {
  const iter = setInterval(1000, electronics);
  for await (const items of iter) {
    const item = items.shift();
    console.log({ item });
  }
})();
