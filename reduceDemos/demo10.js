function Keyword(arr = [], keys = []) {
  return keys.reduce(
    (t, v) => (arr.some((w) => w.includes(v)) && t.push(v), t),
    []
  );
}

const text = [
  "今天天气真好，我想出去钓鱼",
  "我一边看电视，一边写作业",
  "小明喜欢同桌的小红，又喜欢后桌的小君，真TM花心",
  "最近上班喜欢摸鱼的人实在太多了，代码不好好写，在想入非非",
];
const keyword = ["偷懒", "喜欢", "睡觉", "摸鱼", "真好", "一边", "明天"];
console.log(Keyword(text, keyword)); // ["喜欢", "摸鱼", "真好", "一边"]
