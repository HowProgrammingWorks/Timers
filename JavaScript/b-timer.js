'use strict';

class Timer {
  constructor(interval) {
    this.interval = interval;
    this.enabled = false;
    this.listeners = [];
    this.timer = null;
  }
  on(name, fn) {
    if (name === 'timer') {
      this.listeners.push(fn);
    }
  }
  start() {
    if (!this.enabled) {
      this.enabled = true;
      this.timer = setTimeout(() => {
        this.enabled = false;
        for (const fn of this.listeners) fn();
      }, this.interval);
    }
  }
  stop() {
    if (this.enabled) {
      clearTimeout(this.timer);
      this.enabled = false;
    }
  }
}

// Uasge

const timer1 = new Timer(2000);

timer1.on('timer', () => {
  console.log('Timer event 1');
});

timer1.on('timer', () => {
  console.log('Timer event 2');
});

timer1.start();
timer1.stop();
