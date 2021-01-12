// 最少硬币找零
function minCoinChange(coins, amount) {
  let result = null;
  if (!amount) return result;

  const makeChange = (index, value, min) => {
    let coin = coins[index];
    let newAmount = Math.floor(value / coin);
    if (newAmount) min[coin] = newAmount;
    if (value % coin !== 0) {
      makeChange(--index, value - coin * newAmount, min);
    }
  };

  const arr = [];
  for (let i = 0; i < coins.length; i++) {
    const cache = {};
    makeChange(i, amount, cache);
    arr.push(cache);
  }

  console.log(arr);
  let newMin = 0;
  arr.forEach((item) => {
    let min = 0;
    for (let v in item) min += item[v];
    if (!newMin || min < newMin) {
      newMin = min;
      result = item;
    }
  });
  return result;
}

const result = minCoinChange([1, 5, 10, 25], 36);
console.log(result);

// 背包问题
function knapSack(capacity, weights, values, n) {
  const kS = [];

  // 将ks初始化为一个空的矩阵
  for (let i = 0; i <= n; i++) {
    kS[i] = [];
  }

  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      // 忽略矩阵的第1列和第1行
      if (i === 0 || w === 0) {
        kS[i][w] = 0;
      } else if (weights[i - 1] <= w) {
        const a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
        const b = kS[i - 1][w];
        kS[i][w] = Math.max(a, b);
      } else {
        kS[i][w] = kS[i - 1][w];
      }
    }
  }

  console.log(kS);
}

const capacity = 5;
const weights = [2, 3, 4];
const values = [3, 4, 5];
knapSack(capacity, weights, values, weights.length);

// 最长公共子序列（LCS）
function printSolution(solution, wordX, m, n) {
  let a = m;
  let b = n;
  let x = solution[a][b];
  let answer = "";
  while (x !== "0") {
    if (solution[a][b] === "diagonal") {
      answer = wordX[a - 1] + answer;
      a--;
      b--;
    } else if (solution[a][b] === "left") {
      b--;
    } else if (solution[a][b] === "top") {
      a--;
    }
    x = solution[a][b];
  }
  return answer;
}

function lcs(wordX, wordY) {
  const m = wordX.length;
  const n = wordY.length;
  const l = [];
  const solution = [];
  for (let i = 0; i <= m; i++) {
    l[i] = [];
    solution[i] = [];
    for (let j = 0; j <= n; j++) {
      l[i][j] = 0;
      solution[i][j] = "0";
    }
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        l[i][j] = 0;
      } else if (wordX[i - 1] === wordY[j - 1]) {
        l[i][j] = l[i - 1][j - 1] + 1;
        solution[i][j] = "diagonal";
      } else {
        const a = l[i - 1][j];
        const b = l[i][j - 1];
        l[i][j] = Math.max(a, b);
        solution[i][j] = l[i][j] === l[i - 1][j] ? "top" : "left";
      }
    }
  }

  return printSolution(solution, wordX, m, n);
}

const wordX = ["a", "c", "b", "a", "e", "d"];
const wordY = ["a", "b", "c", "a", "d", "f"];
console.log(lcs(wordX, wordY));
