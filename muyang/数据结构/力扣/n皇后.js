/**
 * 递归计算 N 皇后的解
 * @param {number} n
 * @param {number[]} tmp 长度为 n 的数组，tmp[i] 代表第 i 行的皇后放置的位置
 * @param {string[]} res
 */

// 解法一
function solveNQueens(n) {
  // 构建棋盘
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.');
  }
  // 变量
  const res = [];
  const cols = new Set(); // 列集，记录出现过皇后的列
  const diag1 = new Set(); // 正对角线集
  const diag2 = new Set(); // 反对角线集
  // 判断是否可走
  function verify(row, col) {
    const mask1 = diag1.has(row - col);
    const mask2 = diag2.has(row + col);
    const mask3 = cols.has(col);
    return mask1 || mask2 || mask3;
  }
  //缓存
  function setCache(row, col) {
    diag1.add(row - col);
    diag2.add(row + col);
    cols.add(col);
  }
  //清除缓存
  function delCache(row, col) {
    diag1.delete(row - col);
    diag2.delete(row + col);
    cols.delete(col);
  }

  function helper(row) {
    if (row === n) {
      const stringsBoard = board.slice(); // 拷贝一份board
      for (let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join(''); // 将每一行拼成字符串
      }
      res.push(stringsBoard)
      return
    }
    for (let col = 0; col < n; col++) {
      if (!verify(row, col)) { // 满足条件
        board[row][col] = 'Q';
        setCache(row, col);
        helper(row + 1);
        board[row][col] = '.';
        delCache(row, col)
      }
    }
  }
  helper(0); // 从第0行开始放置
  return res;
}

solveNQueens(4);


// 解法二
/**
 * 递归计算 N 皇后的解
 * @param {number} n
 * @param {number[]} tmp 长度为 n 的数组，tmp[i] 代表第 i 行的皇后放置的位置
 * @param {string[]} res
 */

// tmp 数组 存每层对应的正确索引 res结果
function dfs(n, tmp, res) {
  // 如果 tmp 长度为 n，代表所有皇后放置完毕
  if (tmp.length === n) {
    // 把这种解记录下来
    res.push(
      tmp.map(i => {
        let strArr = Array(n).fill('.')
        strArr.splice(i, 1, 'Q')
        return strArr.join('')
      })
    )
    return
  }
  // 每次有 n 个选择，该次放置在第几列
  for (let j = 0; j < n; j++) {
    // 如果当前列满足条件
    if (isValid(tmp, j)) {
      // 记录当前选择
      tmp.push(j)
      // 继续下一次的递归
      dfs(n, tmp, res)
      // 撤销当前选择
      tmp.pop()
    }
  }
}

function isValid(tmp, j) {
  let i = tmp.length
  for (let x = 0; x < i; x++) {
    let y = tmp[x]
    if (y === j || x - y === i - j || x + y === i + j) {
      return false
    }
  }
  return true
}