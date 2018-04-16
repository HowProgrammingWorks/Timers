'use strict';

const begin = process.hrtime();

setTimeout(() => {
  const end = process.hrtime(begin);
  console.log('10ms: ' + end[0] + 's ' + end[1] + 'ns');
}, 10);

setTimeout(() => {
  const end = process.hrtime(begin);
  console.log('100ms: ' + end[0] + 's ' + end[1] + 'ns');
}, 100);

setTimeout(() => {
  const end = process.hrtime(begin);
  console.log('500ms: ' + end[0] + 's ' + end[1] + 'ns');
}, 500);

setTimeout(() => {
  const end = process.hrtime(begin);
  console.log('1000ms: ' + end[0] + 's ' + end[1] + 'ns');
}, 1000);
