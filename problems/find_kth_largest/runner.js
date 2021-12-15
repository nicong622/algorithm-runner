const KthLargest = require('./heap')

function runner (testSeq) {
  const [k, nums] = testSeq[0];
  const ret = [null];
  const instance = new KthLargest(k, nums)

  let i = 1;
  while (i < testSeq.length) {
    ret.push(instance.add(testSeq[i++][0]))
  }

  return ret;
}

module.exports = runner;
