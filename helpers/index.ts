/**
 * 在区间 [min, max) 中获取一个随机的整数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
export function randomInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

// 洗牌算法
export function shuffle<T>(arr: T[]) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let j = randomInRange(1, len-i);
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr;
}

/**
 * 生成一个长度为 len 的随机整数数组
 * @param len 数组长度
 * @param range 数组范围
 * @returns 生成的数组
 */
export function genRandomeArray(len: number, range: [number, number] = [0, 100]) {
  let i = 0;
  const arr: number[] = [];

  while (i<len) {
    arr.push(randomInRange(range[0], range[1]))
    i++;
  }

  return arr;
}

/**
 * 找出数组中最大的数
 * @param arr
 * @returns 数组中最大的数
 */
export function findMax(arr: number[]) {
  return [...arr].sort((a, b) => a - b).pop() || 0;
}

/**
 * 找出数组中最小的数
 * @param arr
 * @returns 数组中最小的数
 */
export function findMin(arr: number[]) {
  return [...arr].sort((a, b) => b - a).pop() || 0;
}

/**
 * 找出一个数组中最小和最大的数
 * @param arr
 * @returns [最小的数, 最大的数]
 */
export function findMinMax(arr: number[]): [number, number] {
  const sorted = [...arr].sort((a, b) => a - b);

  return [sorted.shift() || 0, sorted.pop() || 0]
}