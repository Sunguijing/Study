
// const Stack = require("./stack");
// console.log(Stack);
// const Stack = require('../stack/mystack');
let BinTreeNode = function(data){
  this.data = data;
  this.leftChild = null; // 定义个左孩子
  this.rightChild = null; // 定义个右孩子
  this.parentNode = null; // 定义个父节点
}

function BinaryTree(){
  this.root = null;
  // 利用广义表建立一个二叉树
  /*
  * 用广义表来表达二叉树呢，以广义表 A(B(D,E(G,)),C(,F))# 为例，算法如下
  *   广义表的表名放在表前，表示树的根节点，括号中的是根的左右子树
  *   每个节点的左右子树用逗号隔开，如果有仅有右子树没有左子树，逗号不省略
  *   整个广义表的最后加上特殊符号#表示输入结束
  */ 
//  思路： 如果是字母，就进栈，(前进栈，如果是逗号，则为右子树，利用k值做标记，实例化BinTreeNode，记录出栈的元素，出栈的元素的子树为新加入的数，新加入的父节点则为刚出栈的元素
  this.init_tree = function(data){
    let stack = new Stack;
    let k = 0;
    let new_node = null;
    for(let i=0;i<data.length;i++){
      let item = data[i];
      if(item === "#"){
        break;
      }
      if(item === "("){
        stack.push(new_node);
        k = 1;
      } else if(item == ","){
        k = 2;
      } else if(item === ")"){
        stack.pop();
      } else {
        new_node = new BinTreeNode(item);
        if(this.root === null){
          this.root = new_node;
        } else if(k === 1){ // 左子树
          let top_node = stack.top();
          top_node.leftChild = new_node;
          new_node.parentNode = top_node;
        } else {
          let top_node = stack.top();
          top_node.rightChild = new_node;
          new_node.parentNode = top_node;
        }
      }
    }
  };

  // 概念
  /**
   * 前序遍历: 先根节点，再左节点，最后右节点
   * 中序遍历: 先左节点，再根节点，最后右节点
   * 后序遍历：先左节点，再右节点，最后左节点
   * 我的理解: 前序，中序，后序，就是根节点在哪
   * **/ 
  this.in_order = function(node){ // 中序遍历
    if(node === null){
      return;
    }
    this.in_order(node.leftChild);
    console.log("中序遍历结果：", node.data);
    this.in_order(node.rightChild)
  };
  this.before_order = function(node){ // 先序遍历
    if(node === null){
      return;
    }
    console.log(node.data);
    this.before_order(node.leftChild);
    this.before_order(node.rightChild);
  };
  this.after_order = function(node){ // 后序遍历
    if(node === null){
      return;
    }
    this.after_order(node.leftChild);
    this.after_order(node.rightChild);
    console.log(node.data);
  };
  let node_number = function(node){ // 返回节点的数量   左子树节点+右子树节点+1（根节点）
    if(node === null){
      return;
    }
    let left_number = this.node_number(node.leftChild);
    let right_number = this.node_number(node.rightChild);
    return left_number + right_number + 1;
  }
  this.node_number = function(node){ // 返回节点的数量   左子树节点+右子树节点+1（根节点）
    return node_number(node);
  }
  let node_height = function(node){
    if(node === null){
      return;
    }
    let left_number = this.node_number(node.leftChild);
    let right_number = this.node_number(node.rightChild);
    if(left_number > right_number){
      return left_number + 1;
    } else {
      return right_number + 1;
    }
  }
  this.node_height = function(node){ // 返回树的高度
    return node_height;
  }
  this.get_root = function(node){
    console.log('this.root： ', this.root)
    if(node === null){
      return null;
    }
    return this.root;
  }
  var find_node = function(node, data){
    if(!node){
        return null;
    }
    if(node.data == data){
        return node;
    }

    left_res = find_node(node.leftChild, data);
    if(left_res){
        return left_res;
    }

    return find_node(node.rightChild, data);
  };
  // 查找data
  this.find = function(data){
      return find_node(this.root, data);
  };
}
// let aaa = new BinaryTree();
// aaa.init_tree('A(B(D,E(G,)),C(,F))#')
// let root_node = aaa.get_root();
// aaa.after_order(root_node);

// return BinaryTree;