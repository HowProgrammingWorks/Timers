'use strict';

const timers = require('timers');

const timer = {
  _onTimeout: () => {
    counter++;
  }
};
timers.enroll(timer, 1000);
timers.active(timer);
