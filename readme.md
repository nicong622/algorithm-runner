利用 Jest 来测试算法

## 测试某个特定的算法

例如要测试 problems/shell_sort

```sh
# npm
npm test -- shell_sort

# yarn
yarn test shell_sort
```

## 添加新的算法及测试用例
在 problems 目录下添加一个子目录，新的子目录下至少有两个文件：
- index.js ：算法的具体实现
- index.test.js ：测试用例