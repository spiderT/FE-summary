const promise = Promise.resolve().then(() => {
  return promise;
});
promise.catch(console.error);

// 运行结果：
// TypeError: Chaining cycle detected for promise #<Promise>
//     at <anonymous>
//     at process._tickCallback (internal/process/next_tick.js:188:7)
//     at Function.Module.runMain (module.js:667:11)
//     at startup (bootstrap_node.js:187:16)
//     at bootstrap_node.js:607:3复制代码解释：.then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。
