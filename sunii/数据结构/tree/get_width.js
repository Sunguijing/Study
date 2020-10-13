//  输出指定层的节点个数
let res = new BinaryTree();
res.init_tree("A(B(D,E(G,)),C(,F))#");
let root_node = res.get_root();


// 思路： 将节点加入队列中，每次要换行的时候，往队列中加入节点0，这步骤是重点
// 设置height为树的高度，在每次从队列中取出的数为0的时候，让height加1，同时，每次该高度的节点个数等于队列为0时候的队列数量（也就是每次为0的时候都是下一高度的节点之和）
// step1: A 0
// step2: B C 0
// step3: D E F 0
// step4: G 0
let get_width = function(node, n){
  if(node === 0){
    return null;
  }
  let queue = new Queue();
  let width = 1;
  let height = 0;
  queue.enqueue(node);
  queue.enqueue(0);
  while(queue.size() > 0){
    let curr_node = queue.dequeue();
    if(curr_node === 0){
      height++;
      if(height === n){
        console.log(width);
        return width;
      }
      
      width = queue.size();
      if(queue.isEmpty()){
        break;
      }else{
        queue.enqueue(0);
      }
    }

    if(curr_node.leftChild) queue.enqueue(curr_node.leftChild);
    if(curr_node.rightChild) queue.enqueue(curr_node.rightChild);
  }
  if(n > height){
    console.log('超过了该树的高度~');
  }
}

get_width(root_node, 6);