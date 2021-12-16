import { findMinMax } from '../helpers/index';
import { genRandomeArray } from './index';

describe.each<[number, [number, number]]>([
  [1, [1, 10]],
  [10, [1, 100]]
])('genRandomeArray(%d, %p)', (len, range) => {
  const arr = genRandomeArray(len, range);
  const [min, max] = findMinMax(arr)

  test(`arr.length should be ${len}`, () => {
    expect(arr.length).toBe(len);
  })

  test(`the max number should less than ${range[1]}`, () => {
    expect(max).toBeLessThan(range[1])
  })

  test(`the minimal number should not less than ${range[0]}`, () => {
    expect(min).not.toBeLessThan(range[0])
  })
})