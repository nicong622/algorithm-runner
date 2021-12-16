// 希尔排序

// 参考 https://juejin.cn/post/6973862597737054244
// 可以借助上面的链接来理解算法的过程，但是最内层循环与下面的实现有点出入。参考文章里的实现是“元素交换”，下面的实现是“元素移动”
export default function shellSort(arr: number[]) {
	const len = arr.length;
	let temp: number;
	let gap = 1;

	while (gap < len / 3) {
		//动态定义间隔序列
		gap = gap * 3 + 1;
	}

	for (gap; gap > 0; gap = Math.floor(gap / 3)) {
		// 内层的两个 for 循环实现了插入排序
		for (var i = gap; i < len; i++) {
			temp = arr[i];

			// 这个 for 循环的作用就是把比 temp 大的 arr[j] 往后移动 gap 个位置，从而腾出一个位置来插入 temp
			// j 从 i-gap 开始是因为对于每个 i ，只需要与前面的元素比较大小（因为最终结果是数组从小到大排序）
			for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
				arr[j + gap] = arr[j];
				// console.log('inner gap: %d, i: %d, j: %d, arr: %s', gap, i, j, JSON.stringify(arr))
			}
			arr[j + gap] = temp;
			// console.log('outer gap: %d, i: %d, j: %d, arr: %s \n', gap, i, j, JSON.stringify(arr))
		}
	}
	return arr;
}
