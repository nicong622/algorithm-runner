export default function subsets(nums: number[]): number[][] {
  const res: number[][] = [];

  const backTracing = (index: number, list: number[]) => {
    res.push(list.slice()); // 调用子递归前，加入解集

    for (let i = index; i < nums.length; i += 1) { // 枚举出所有可选的数
      list.push(nums[i]); // 选这个数
      backTracing(i + 1, list); // 基于选这个数，继续递归
      list.pop(); // 撤销选这个数
    }
  };

  backTracing(0, []);

  return res;
}
