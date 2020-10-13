// 使用非递归的方式实现前序遍历 前序遍历： 根左右
let res = new BinaryTree();
res.init_tree("A(B(D,E(G,)),C(,F))#");
let root_node = res.get_root();

// 思路： 一棵树，第一个元素肯定是根节点，然后判断如果有右节点，则进栈, 如果是左节点，则让当前节点等于左节点，如果当前节点没有左右节点了，则应该跳出左节点循环，到右节点，所以，让栈里面的
//  右节点出栈
function pre_order(node){
  let stack = new Stack();
  if(node === null){
    return null;
  }
  let curr_node = node;
  console.log(curr_node)
  while(curr_node){
    console.log(curr_node.data);
    // 如果是右子树，就让进栈
    if(curr_node.rightChild){
      stack.push(curr_node.rightChild);
    }
    if(curr_node.leftChild){
      curr_node = curr_node.leftChild;
    } else {
      curr_node = stack.pop();
    }
  }
}

pre_order(root_node);
