//给定一个二维网格和一个单词，找出该单词是否存在于网格中。
/** 
 * board = [
   ['A', 'B', 'C', 'E'],
   ['S', 'F', 'C', 'S'],
   ['A', 'D', 'E', 'E']
 ]

 给定 word = "ABCCED", 返回 true
 给定 word = "SEE", 返回 true
 给定 word = "ABCB", 返回 false
 * 
*/
// 链接： https: //leetcode-cn.com/problems/word-search

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const row = board.length;
  const col = board[0].length;
  // 找到每一个点
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const res = find(i, j, 0, board);
      if (res) {
        return true
      }
    }
  }

  function find(i, j, cur_p) {
    if (i >= row || i < 0) return false; // 超出行
    if (j >= col || j < 0) return false; // 超出列
    let letter = board[i][j];
    if (letter !== word[cur_p]) return false; // 不是当前字符

    if (cur_p === word.length - 1) {
      return true;
    }
    board[i][j] = null;
    // 匹配正确
    const res = find(i + 1, j, cur_p + 1) || find(i, j + 1, cur_p + 1) || find(i - 1, j, cur_p + 1) || find(i, j - 1, cur_p + 1);
    board[i][j] = letter;
    return res;
  }
  return false;
};
const word = 'ABCCED';
const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];
console.log(exist(board, word));
// console.log(exist(board, 'ABCB'))