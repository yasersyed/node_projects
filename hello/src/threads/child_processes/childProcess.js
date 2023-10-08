// const { spawn } = require("node:child_process");
const { exec } = require("node:child_process");
const Util = require('util');
const asyncExec = Util.promisify(exec);

const child = exec("node ../worker_thread/worker.js");
child.stdout.on("data", (data) => {
  console.log(data);
});

// const lsl = exec('ls -l');
// const wcl = exec('wc -l');

// lsl.stdout.pipe(wcl.stdin);

// lsl.stdout.on("data", (data) => {
//     console.log(`number of files: ${data}`);
//   //   child.stdout.pipe(data);
//     // console.log('child process output: ' + data);
//   });
