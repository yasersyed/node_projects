const EventEmitter = require("events");
const { url } = require("inspector");

class MyEmitter extends EventEmitter {
  constructor() {
    super();
    process.nextTick(()=> {
      console.log("ready from constructor");
      this.emit('ready');
    });
    // Emit the 'ready' event right after the object is created.
  }

  emitReady()
  {
    process.nextTick(() => {
      console.log('ready from nextTick 2')
      this.emit("ready");
    });
  }

  getHostname() {
    console.log('localhost');
  }
}

const myEmitter = new MyEmitter();
myEmitter.on("ready", () => {
  console.log("ready from event");
});

console.log('\x33[33m Hello World \x33[39m');

// // myEmitter.getHostname();
// myEmitter.emitReady();
