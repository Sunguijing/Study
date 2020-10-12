  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  function addTwoNumbers(l1, l2) {
    let link_node1 = l1;
    let link_node2 = l2;
    let add = 0;
    let root = null;
    let parent_node = null;
    while (link_node1 || link_node2) {
      const sum = (link_node1 ? link_node1.val : 0) + (link_node2 ? link_node2.val : 0) + add;
      add = Math.floor(sum / 10);
      const new_node = new ListNode(sum % 10);
      if (root === null) {
        root = new_node;
      } else {
        parent_node.next = new_node;
      }
      parent_node = new_node;
      if (link_node1) {
        link_node1 = link_node1.next;
      }
      if (link_node2) {
        link_node2 = link_node2.next;
      }
    }
    if (add > 0) {
      const new_node = new ListNode(add);
      parent_node.next = new_node;
    }
    return root;
  }

  const link1 = { // 99
    val: 1,
    next: {
      val: 0,
      next: {
        val: 0,
        next: {
          val: 0,
          next: {
            val: 0,
            next: {
              val: 0,
              next: {
                val: 0,
                next: {
                  val: 0,
                  next: {
                    val: 0,
                    next: {
                      val: 0,
                      next: {
                        val: 1,
                        next: null
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
    }
  }

  const link2 = { // 999
    val: 6,
    next: {
      val: 5,
      next: {
        val: 4,
        next: null,
      },
    },
  };

  addTwoNumbers(link1, link2);

  // var addTwoNumbers = function (l1, l2) {
  //   let cur_link1 = l1;
  //   let cur_link2 = l2;
  //   let new_obj = {
  //     1: '',
  //     2: '',
  //   };
  //   while (cur_link1 || cur_link2) {
  //     if (cur_link1) {
  //       new_obj[1] = cur_link1.val + new_obj[1];
  //       cur_link1 = cur_link1.next;
  //     }
  //     if (cur_link2) {
  //       new_obj[2] = cur_link2.val + new_obj[2];
  //       cur_link2 = cur_link2.next;
  //     }
  //   }
  //   const new_str = (BigInt(new_obj[1]) + BigInt(new_obj[2])).toString();
  //   let root = null,
  //     parent_link;
  //   for (let i = new_str.length - 1; i >= 0; i--) {
  //     const new_link = new ListNode(new_str[i]);
  //     if (root === null) {
  //       root = new_link;
  //     } else {
  //       parent_link.next = new_link;
  //     }
  //     parent_link = new_link;
  //   }
  //   console.log(root)
  //   return root;
  // };


  // class TreeNode {
  //   constructor(val) {
  //     this.value = val;
  //     this.left = undefined;
  //     this.right = undefined;
  //   }
  // }

  // function arrToTree(arr) {
  //   let cur_node = new TreeNode(arr[0]);
  //   const root = cur_node;
  //   let queue = [cur_node];
  //   for (let i = 1; i < arr.length; i++) {
  //     cur_node = queue[0];
  //     const new_node = new TreeNode(arr[i]);
  //     if (cur_node.left === undefined) {
  //       cur_node.left = new_node;
  //     } else {
  //       cur_node.right = new_node;
  //       queue.shift();
  //     }
  //     if (arr[i] !== null) {
  //       queue.push(new_node);
  //     }
  //   }
  //   console.log(root)
  //   return root;
  // }


  // arrToTree([1, 2, null, 3, null, 4, 8, null, 10]);