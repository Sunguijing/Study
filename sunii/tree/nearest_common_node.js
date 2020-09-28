//  寻找两个节点的最近公共祖先
let res = new BinaryTree();
res.init_tree("A(B(D,E(G,)),C(,F))#");
let root_node = res.get_root();

let node1 = res.find("D");
let node2 = res.find("G");
console.log(node1.data);
console.log(node2.data);

// 思路： 不太理解
let nearest_common_node = function(root_node, node1, node2){
  if(!root_node || root_node === node1 || root_node === node2){
    return root_node;
  }
  let left = nearest_common_node(root_node.leftChild, node1, node2);
  let right = nearest_common_node(root_node.rightChild, node1, node2);

  if(left && right){
    return root_node;
  }
  if(left){
    return left;
  }
  return right;
}

let ancestor = nearest_common_node(root_node, node1, node2);
console.log(ancestor.data);