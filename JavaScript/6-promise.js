'use strict';

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

const test = async () => {
  console.log('Start sleep: ' + new Date().toISOString());
  console.log('  Sleep about 3 sec');
  await sleep(3000);
  console.log('After sleep: ' + new Date().toISOString());
};

test();
