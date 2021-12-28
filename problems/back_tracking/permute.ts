// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 示例 2：
// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]

// 示例 3：
// 输入：nums = [1]
// 输出：[[1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export default function permute(nums: number[]): number[][] {
  if (nums.length === 0) return [];

  const res: number[][] = [];

  function backtrace(path: number[]) {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }

    nums.forEach((num) => {
      if (path.includes(num)) return;
      backtrace([...path, num]);
    });
  }

  backtrace([]);

  return res;
}
