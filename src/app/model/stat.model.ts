export class Stat {

  constructor(public started = 0, public step = 0, public time = 0, public level = 0) {
    this.started = Date.now();
  }

  finish() {
    this.time = Date.now() - this.started;
  }

  increase() {
    this.step++;
  }
}
