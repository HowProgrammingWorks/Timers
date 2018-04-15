'use strict';

const begin = process.hrtime();

setTimeout(() => {
  const end = process.hrtime(begin);
  console.log('10: ' + end[0] + 's ' + end[1] + 'ns');
}, 10);

setTimeout(() => {
  const end = process.hrtime(begin);
  console.log('100: ' + end[0] + 's ' + end[1] + 'ns');
}, 100);

setTimeout(() => {
  const end = process.hrtime(begin);
  console.log('500: ' + end[0] + 's ' + end[1] + 'ns');
}, 500);

setTimeout(() => {
  const end = process.hrtime(begin);
  console.log('1000: ' + end[0] + 's ' + end[1] + 'ns');
}, 1000);
