'use strict';

const begin = process.hrtime();

setTimeout(() => {
  const end = process.hrtime(begin);
  console.log('0: ' + end[0] + 's ' + end[1] + 'ns');
}, 0);

setTimeout(() => {
  const end = process.hrtime(begin);
  console.log('10: ' + end[0] + 's ' + end[1] + 'ns');
}, 10);

setTimeout(() => {
  const end = process.hrtime(begin);
  console.log('20: ' + end[0] + 's ' + end[1] + 'ns');
}, 20);

const fib = n => (n < 2 ? 1 : fib(n - 1) + fib(n - 2));

for (let i = 0; i < 40; i++) fib(i);
