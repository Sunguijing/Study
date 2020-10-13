// 给你一棵所有节点为非负值的二叉搜索树， 请你计算树中任意两节点的差的绝对值的最小值。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  const stack = [];
  let cur_node = root;
  let pre_node;
  let result_val = -1;
  while (true) {
    while (cur_node) {
      stack.push(cur_node);
      cur_node = cur_node.left;
    }
    const top_node = stack.pop();
    if (pre_node) {
      const new_val = Math.abs(top_node.val - pre_node.val);
      if (result_val === -1) {
        result_val = new_val
      } else {
        new_val < result_val ? result_val = new_val : null;
      }
    }
    pre_node = top_node;
    cur_node = top_node.right;
    if (!cur_node && stack.length === 0) {
      console.log(result_val)
      return result_val;
    }
  }
};


const tree = {
  val: 5,
  left: {
    val: 4
  },
  right: {
    val: 7
  }
}

getMinimumDifference(tree)