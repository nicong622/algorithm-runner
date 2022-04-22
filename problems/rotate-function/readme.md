[问题链接](https://leetcode-cn.com/problems/rotate-function/)

## 暴力解法

看到题目很容易就能想到用循环中嵌套循环的解法，但时间复杂度是指数级别

## 快速解法

要用更低的时间复杂度解决这个问题，关键是找到 F(k) 与 F(k-1) 之间的关系。

观察题目的示例，可以得出：

```
F(0) = 0 * nums[0] + 1 * nums[1] + 2 * nums[2] + 3 * nums[3]
F(1) = 0 * nums[3] + 1 * nums[0] + 2 * nums[1] + 3 * nums[2]
F(2) = 0 * nums[2] + 1 * nums[3] + 2 * nums[0] + 3 * nums[1]
F(3) = 0 * nums[1] + 1 * nums[2] + 2 * nums[3] + 3 * nums[0]
```

当 k > 0 时，用 F(k) - F(k-1) 可以得到：

`F(k) - F(k-1) = sum(nums) - len * nums[len - k]`

即可以根据 F(k-1) 计算出 F(k)，然后找出最大的 F(k)。

这种解法的时间复杂度是 O(n)