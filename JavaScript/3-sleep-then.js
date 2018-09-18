'use strict';

const sleep = msec => new Promise(resolve => {
  setTimeout(resolve, msec);
});

console.log('Start sleep: ' + new Date().toISOString());
console.log('  Sleep about 3 sec');
sleep(3000).then(() => {
  console.log('After sleep: ' + new Date().toISOString());
});
