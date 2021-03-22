// https://blog.csdn.net/qq_32657025/article/details/79506033

// 递归。abc的所有组合值可以分为以下部分：
// 1. a+ 剩余字母组合值；
// 2. b+ 剩余字母组合值；
// 3. c+ 剩余字母组合值；

function combination(str) {
  if (str.length == 1) {
    return [str];
  }
  let res = [];
  for (let i = 0; i < str.length; i++) {
    let restStr = str.slice(0, i) + str.slice(i + 1);
    let restArr = combination(restStr);
    // console.log(restArr);
// [ 'c' ]
// [ 'b' ]
// [ 'bc', 'cb' ]
// [ 'c' ]
// [ 'a' ]
// [ 'ac', 'ca' ]
// [ 'b' ]
// [ 'a' ]
// [ 'ab', 'ba' ]
    restArr = restArr.map((x) => str[i] + x);
    res = res.concat(restArr);
  }
  return res;
}

console.log(combination("abc")); // 3*2
