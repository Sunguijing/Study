// 给定一个链表， 两两交换其中相邻的节点， 并返回交换后的链表。
// 你不能只是单纯的改变节点内部的值， 而是需要实际的进行节点交换。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) {
    return null;
  }
  let cur_node = head;
  const stack = [];
  let root = cur_node.next || cur_node;
  while (cur_node) {
    if (stack.length === 0) {
      stack.push(cur_node);
      cur_node = cur_node.next;
    } else {
      const top_node = stack.pop();
      const next_node = cur_node.next;
      if (next_node) {
        top_node.next = next_node.next || next_node;
      } else {
        top_node.next = next_node;
      }
      cur_node.next = top_node;
      cur_node = next_node;
    }
  }
  console.log(root)
  return root;
};

const root = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,

    }
  }
}

swapPairs(root);

// var swapPairs = function (head) {
//   let thead = new ListNode(0);
//   thead.next = head;
//   let tmp = thead;
//   while (tmp.next != null && tmp.next.next != null) {
//     let start = tmp.next;
//     let end = start.next; 
//     tmp.next = end;
//     start.next = end.next;
//     end.next = start;
//     tmp = start;
//   }
//   return thead.next;
// };