async function performTasksConcurrently() {
  const result1 = await task1();
  console.log(result1);
  
  const result2 = await task2();
  console.log(result2);
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 Completed");
    }, 10);
  });
}

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 completed");
    }, 10);
  });
}

performTasksConcurrently();
//to perform sequentially add async to task1, task2 functions

async function testParallelExecution() {
  console.log("testing parallel execution");
  const [data1, data2] = await Promise.all([task1(), task2()]);
  console.log(`parallel execution: ${data1}`);
  console.log(`parallel execution: ${data2}`);
}

testParallelExecution();
