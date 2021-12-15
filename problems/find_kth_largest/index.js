function insert(array, val) {
  let i = 0;
  const len = array.length;

  while (i < len) {
    if (array[i] <= val) {
      break;
    }
    i++;
  }

  if (i === len) array.push(val);
  else array = [...array.slice(0, i), val, ...array.slice(i)];

  return array;
}

/**
* @param {number} k
* @param {number[]} nums
*/
var KthLargest = function(k, nums) {
  this.k = k;
  this._nums = [];

  for (const x of nums) {
    this.add(x)
  }
};

/**
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  if (this._nums.length < this.k || val >= this._nums[this.k - 1]) {
    this._nums = insert(this._nums.slice(0, this.k), val)
  } else {
    return this._nums[this.k - 1]
  }

  return this._nums[this.k - 1];
};

/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/

module.exports = KthLargest;
