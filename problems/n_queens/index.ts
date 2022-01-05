// 用回溯算法解决 N 皇后问题

function solveNQueens(n: number) {
  const localRes = calcNQueens(0, n, [], [])
  return localRes;
};

function calcNQueens(row: number, size: number, result: number[], globalRes: string[][]) {
  if (row === size) {
    globalRes.push(print(result, size));
    return;
  }

  for (let i = 0; i < size; i++) {
    if (isOk(row, i, result, size)) {
      result[row] = i
      calcNQueens(row+1, size, result, globalRes)
    }
  }

  return globalRes
}

function isOk(row: number, col: number, result: number[], size: number): boolean {
  let leftUp = col - 1;
  let rightUp = col + 1;

  for (let r = row - 1; r >= 0; r--) {
    if (result[r] === col) return false;
    if (leftUp >=0 && result[r] === leftUp) return false;
    if (rightUp <= size && result[r] === rightUp) return false;
    leftUp--;
    rightUp++;
  }

  return true
}

function print(input: number[], size: number): string[] {
  return input.map(i => {
    let str = Array(size).fill('.')
    str.splice(i, 1, 'Q')
    return str.join('')
  })
}

console.log(solveNQueens(4))
console.log(solveNQueens(1))