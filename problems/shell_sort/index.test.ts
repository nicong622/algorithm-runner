import shellSort from './index'

const input = [4,3,5,9,7,1,2,0,10]

test(JSON.stringify(input), () => {
  expect(shellSort(input)).toEqual(expect.arrayContaining([0,1,2,3,4,5,7,9,10]))
})
