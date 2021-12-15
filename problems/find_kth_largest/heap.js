/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    //初始化k个节点的小顶堆，
    this.heap = nums.sort((a,b)=>a-b).slice(nums.length >= k ? nums.length - k : 0) //k个元素
    this.size = this.heap.length
    this.k = k
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.size == this.k) {
        if(val <= this.heap[0]) {
            return this.heap[0]
        }
        this.heap[0] = val
        heapDown(this.heap, 0)
        return this.heap[0]
    } else { //不足k个元素
        this.heap.push(val)
        heapUp(this.heap, this.size++)
        if(this.size == this.k) {
            return this.heap[0]
        }
        return null
    }
};


function heapUp(ary, idx) {
    while(idx > 0) {
        let pIdx = (idx - 1) >> 1
        if(ary[idx] < ary[pIdx]) {
            swap(ary, idx, pIdx)
            idx = pIdx
        } else {
            return
        }
    }
}

function heapDown(ary, idx, end = ary.length) {
    while(idx < end) {
        let minIdx = idx
        let l = idx * 2 + 1
        let r = idx * 2 + 2
        if(l < end && ary[l] < ary[minIdx]) {
            minIdx = l
        }
        if(r < end && ary[r] < ary[minIdx]) {
            minIdx = r
        }
        if(minIdx == idx) return
        swap(ary, idx, minIdx)
        idx = minIdx
    }
}

function swap (ary, i, j) {
    let t = ary[i]
    ary[i] = ary[j]
    ary[j] = t
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

module.exports = KthLargest
