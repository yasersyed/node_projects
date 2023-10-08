const { Worker } = require("node:worker_threads");

/**
 * execute shell command pwd.
 */
const { exec } = require("node:child_process");
const pwd = exec("pwd", (err, output) => {
  if (err) {
    console.error("error: " + err);
    return;
  }
  console.log("pwd: " + output);
  return output;
});

const worker = new Worker("/Users/syedy/Node Projects/hello/src/threads/worker_thread/worker-script.js");

console.log("posting message");
var num = 100;
worker.postMessage(num);

worker
  .on("message", (data) => {
    worker.terminate();
    console.log("data: " + data);
  })


// return new Promise((resolve) => {
//   worker.terminate();
// })

// //get result from worker-script when it emits message event with result after receiving data from above postMessage event
// async function result() {
//   const result1 = await getResult();
//   worker.terminate();
// }

// function getResult() {
//   return worker.on("message", (data) => {
//     return data;
//   });
// }

// result().catch((error) => {
//   console.error("Error:", error);
// });

// worker.postMessage('hello');
//
// worker.on('error', (event) => {
//   console.error(event.message);
// });

// worker.terminate();
