const {parentPort} = require('node:worker_threads');

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

var multiply = (num) => {
    return num * 2;
};

let result = multiply(5);
console.log(`result is: ${result}`);


//get number to multiply from 'message event emitted by a worker'
eventEmitter.on('message', event => {
    console.log('listening to message');
    const data = event;
    console.log(`num is: ${data}`);
    const result = multiply(data);
    postMessage(result);
    // eventEmitter.emit('message', result);
});

parentPort.on('message', (event) => {
    console.log('we received this data: ' + event);
    var result = multiply(event);
    parentPort.postMessage('result incoming...');
    parentPort.postMessage(`double = ${result}`);
    // eventEmitter.emit('message', result);
})

// eventEmitter.emit('message', '100');