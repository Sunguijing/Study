// import { link } from './demo-data';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const { link } = require('./demo-data');

// var reorderList = function (head) {
//   if (head === null) {
//     return null;
//   }
//   if (head.next === null) {
//     return head;
//   }
//   let cur_link = head;
//   let root = null;
//   const res = [];
//   while (cur_link) {
//     res.push(cur_link);
//     cur_link = cur_link.next;
//   }
//   let end_index = res.length - 1,
//     star_index = 0;
//   let pre_node = null;
//   while (end_index > star_index) {
//     res[star_index].next = res[end_index];
//     if (pre_node) {
//       pre_node.next = res[star_index];
//     } else {
//       root = res[star_index]
//     }
//     pre_node = res[end_index];
//     end_index -= 1;
//     star_index += 1;
//   }
//   pre_node.next = res[end_index];
//   if (end_index === star_index) {
//     res[end_index].next = null;
//   } else {
//     res[end_index].next = res[star_index];
//     res[star_index].next = null;
//   }
//   return root;
// };

var reorderList = function (head) {
  if (!head) return null;
  let tempHead = head;
  let arr = [];
  while (tempHead) {
    arr.push(tempHead);
    tempHead = tempHead.next;
  }
  //原链表第一个节点不变，依次加入 最右边节点，最左边节点（加入后移除）
  let left = 1;
  let right = arr.length - 1;
  while (left <= right) {
    //如果left===right时的最后next指向自己，最后有节点置空可以排除影响
    //例子：1->4->2->3->3 最后置空 3->null，因为两个节点是同一个地址结果变成1->4->2->3->null
    //也可以 用if(left<=right)排除重复添加

    //先加右边节点
    head.next = arr[right];
    right--;
    head = head.next;
    //再加左边节点
    head.next = arr[left];
    left++;
    head = head.next;
  }
  //最后一个节点置空，避免出现环
  head.next = null;
};

reorderList(link);