'use strict';

const timers = require('node:timers');

const timer = {
  _onTimeout: () => {
    console.log('_onTimeout called');
  },
};

timers.enroll(timer, 1000);
timers.active(timer);
console.dir({ timer });
