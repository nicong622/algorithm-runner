import { findFirstMatch, findLastMatch } from './index';

describe.each([
  [3, [1, 2, 3, 4, 5]],
  [3, [3, 4, 5, 6]],
  [3, [1, 1, 2, 3]],
  [3, [1, 1, 2, 2]],
  [13, [1, 1, 2, 2, 12, 13, 13, 14]],
])('find first %d in %p', (target, arr) => {
  const expected = arr.findIndex(val => val === target);

  test(`expected ${expected}`, () => {
    expect(findFirstMatch(arr, target)).toBe(expected)
  })
})

describe.each([
  [3, [1, 2, 3, 4, 5]],
  [3, [3, 4, 5, 6]],
  [3, [1, 1, 2, 3]],
  [3, [1, 1, 2, 2]],
  [13, [1, 1, 2, 2, 12, 13, 13, 14]],
])('find last %d in %p', (target, arr) => {
  let expected = [...arr].reverse().findIndex(val => val === target);
  expected = expected === -1
    ? expected
    : arr.length - 1 - expected;

  test(`expected ${expected}`, () => {
    expect(findLastMatch(arr, target)).toBe(expected)
  })
})