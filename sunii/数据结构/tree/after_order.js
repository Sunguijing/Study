// 使用非递归的方式实现后序遍历 前序遍历： 左右根
let res = new BinaryTree();
res.init_tree("A(B(D,E(G,)),C(,F))#");
let root_node = res.get_root();

// 找到树的最深层，优先打印左节点，其次是右节点，最后是根节点, 如果没有右节点，则先是左节点，再是根节点，
// 思路： 定义一个栈，存放左节点和右节点，定义另一个栈2，依次存放父节点，左节点和右节点，最后输出栈2
function after_order(node){
  if(node === null){
    return null;
  }
  let stack = new Stack();
  let stack2 = new Stack();
  stack.push(node);
  while(stack.size()>0){
    let curr_node = stack.pop();
    stack2.push(curr_node.data);
    if(curr_node.leftChild){
      stack.push(curr_node.leftChild);
    }
    if(curr_node.rightChild){
      stack.push(curr_node.rightChild);
    }
  }
  while(!stack2.isEmpty()){
    console.log(stack2.pop())
  }
}

after_order(root_node);