// https://leetcode-cn.com/problems/rotate-function

function init(nums) {
  let sum = 0;
  let f0 = 0;

  nums.forEach((value, i) => {
    sum += value;
    f0 += i * value;
  });

  return [sum, f0];
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  const len = nums.length;
  let [sums, fkp] = init(nums);
  let max = Math.max(Number.MIN_SAFE_INTEGER, fkp);

  for (let i = 1; i < len; i++) {
    fkp += sums - len * nums[len - i];
    max = Math.max(max, fkp);
  }

  return max;
};

const nums = [4, 3, 2, 6];
console.log(maxRotateFunction(nums));
