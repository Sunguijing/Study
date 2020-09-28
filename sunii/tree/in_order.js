// 使用非递归的方式实现中序遍历 前序遍历： 左根右
let res = new BinaryTree();
res.init_tree("A(B(D,E(G,)),C(,F))#");
let root_node = res.get_root();

// 思路： 用while循环让左节点和左节点的根节点进栈，再外层while循环让栈里面的元素打印，如果该节点有右节点，则右子树进栈，有左节点则先打印左节点，无则打印该右节点
function in_order(node){
  if(node === null){
    return null;
  }
  let stack = new Stack();
  let curr_node = node;
  while(true){
    while(curr_node){
      stack.push(curr_node);
      curr_node = curr_node.leftChild;
    }
    let pop_node = stack.pop();
    console.log(pop_node.data);
    curr_node = pop_node.rightChild;
    if(!curr_node && stack.isEmpty()){
      break;
    }
  }
}

in_order(root_node);