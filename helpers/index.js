/**
 * 在区间 [min, max) 中获取一个随机的整数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// 洗牌算法
function shuffle(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let j = randomInRange(1, len-i)
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

module.exports = shuffle;