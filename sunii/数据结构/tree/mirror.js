/**
 * 对于一棵树，如果每个节点的左右子树互换位置，那么就变成了这棵树的镜像, 请实现mirror方法
 * **/ 
// let binaryTree = require("./binaryTree");
let bt = new BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");
let root_node = bt.get_root();

let mirror = function(node){
  if(node === null){
    return null;
  }
  // 将左右调换
  let temp = mirror(node.leftChild);
  node.leftChild = mirror(node.rightChild);
  node.rightChild = temp;
  // 返回结果
  return node;
}
bt.in_order(root_node);
mirror(root_node);
console.log('翻转后')
bt.in_order(root_node);