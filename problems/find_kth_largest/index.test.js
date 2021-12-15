const runner = require('./runner')

const examples = [
  {
    input: [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]],
    expected: [null, 4, 5, 5, 8, 8]
  },
  {
    input: [[3,[1,1]],[1],[1],[3],[3],[3],[4],[4],[4]],
    expected: [null,1,1,1,1,3,3,3,4]
  },
  {
    input: [[1,[]],[-3],[-2],[-4],[0],[4]],
    expected: [null,-3,-2,-2,0,4]
  },
  {
    input: [[2,[0]],[-1],[1],[-2],[-4],[3]],
    expected: [null,-1,0,0,0,1]
  },
]

examples.forEach(example => {
  test(JSON.stringify(example.input), () => {
    const ret = runner(example.input)

    expect(ret).toEqual(expect.arrayContaining(example.expected))
  });
})

