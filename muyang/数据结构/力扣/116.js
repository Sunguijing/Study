// 116. 填充每个节点的下一个右侧节点指针
// 给定一个完美二叉树， 其所有叶子节点都在同一层， 每个父节点都有两个子节点。 二叉树定义如下：
// struct Node {
//   int val;
//   Node * left;
//   Node * right;
//   Node * next;
// }
// 填充它的每个 next 指针， 让这个指针指向其下一个右侧节点。 如果找不到下一个右侧节点， 则将 next 指针设置为 NULL。
// 初始状态下， 所有 next 指针都被设置为 NULL。

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let cur_node = root;
  let queue = [cur_node, 0];
  let pre_node = null;
  while (true) {
    cur_node = queue.shift();
    if (cur_node === 0) { // 下一列
      if (queue.length === 0) {
        break;
      }
      pre_node = null;
      queue.push(0);
      continue;
    }
    cur_node.next = pre_node;
    pre_node = cur_node;
    cur_node.right && queue.push(cur_node.right);
    cur_node.left && queue.push(cur_node.left);
  }
  return root;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: { val: 7, left: null, right: null }
  },
};

connect(root);