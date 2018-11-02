'use strict';

const timer = setTimeout(() => {}, 10000);

console.dir(timer);

if (process.argv[2] === '--unref') timer.unref();
console.dir(timer);

if (process.argv[3] === '--ref') timer.ref();
console.dir(timer);
