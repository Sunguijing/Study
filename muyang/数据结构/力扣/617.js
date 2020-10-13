// //给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
// // 你需要将他们合并为一个新的二叉树。 合并的规则是如果两个节点重叠， 那么将他们的值相加作为节点合并后的新值， 否则不为 NULL 的节点将直接作为新二叉树的节点。

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} t1
//  * @param {TreeNode} t2
//  * @return {TreeNode}
//  */

//思路 前序遍历

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var mergeTrees = function (t1, t2) {
  function mergeTreesFn(node1, node2) {
    if (node1 === null) {
      return node2;
    }
    if (node2 === null) {
      return node1;
    }
    const cur_node = new TreeNode(node1.val + node2.val);
    cur_node.left = mergeTreesFn(node1.left, node2.left);
    cur_node.right = mergeTreesFn(node1.right, node2.right);
    return cur_node;
  }

  return mergeTreesFn(t1, t2);
};
const root1 = {
  val: 1,
  left: {
    val: 3,
    left: { val: 5, left: null, right: null },
    right: null,
  },
  right: { val: 2, left: null, right: null },
};

const root2 = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: { val: 4, left: null, right: null },
  },
  right: {
    val: 3,
    left: null,
    right: { val: 7, left: null, right: null },
  },
};

console.log(mergeTrees(root1, root2));