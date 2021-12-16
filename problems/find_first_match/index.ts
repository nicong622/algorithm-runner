// 利用二分查找，在有序数组中找出第一个值等于给定值的元素的下标，或找出最后一个值等于给定值的元素的下标

/**
 * 在有序数组中找到第一个值等于给定值的元素的下标，没找到的话返回 -1
 * @param arr 待搜索的数组
 * @param target 给定值
 * @returns 数组下标
 */
export function findFirstMatch(arr: number[], target: number): number {
	const len = arr.length;
	let low = 0;
	let high = len - 1;
	let index = -1;
	let mid = 0;

	while (low <= high) {
		mid = low + ((high - low) >> 1);

		if (arr[mid] === target) index = mid;

		if (target <= arr[mid]) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return index;
}

export function findLastMatch(arr: number[], target: number): number {
	const len = arr.length;
	let low = 0;
	let high = len - 1;
	let index = -1;
	let mid = 0;

	while (low <= high) {
		mid = low + ((high - low) >> 1);

		if (arr[mid] === target) index = mid;

		if (arr[mid] <= target) {
      low = mid + 1;
		} else {
      high = mid - 1;
		}
	}

	return index;
}