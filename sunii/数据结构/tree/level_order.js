// 分层打印二叉树
let res = new BinaryTree();
res.init_tree("A(B(D,E(G,)),C(,F))#");
let root_node = res.get_root();

// 该方法可以依次打印出每层的节点，但是格式不对
// 思路： 用一个队列放树内的节点，另一个队列用来存放处理后的节点
// step1: 存入整个的节点
// step2: 取出根节点存放到队列2中，
// step3: 如果有左节点，放入队列中1，如果有右节点，放入队列1中
// step4: 循环step2，取存放的节点
let level_order = function(node){
  if(node === null){
    return null;
  }
  let queue = new Queue();
  let queue2 = new Queue();
  queue.enqueue(node);
  while(queue.size()>0){
    let curr_node = queue.dequeue();
    queue2.enqueue(curr_node.data);
    if(curr_node.leftChild) queue.enqueue(curr_node.leftChild);
    if(curr_node.rightChild) queue.enqueue(curr_node.rightChild);
  }
  while(!queue2.isEmpty()){
    console.log(queue2.dequeue())
  }
}

// level_order(root_node);

// 思路： 将节点加入队列中，每次要换行的时候，往队列中加入节点0，这步骤是重点
// step1: A 0
// step2: B C 0
// step3: D E F 0
// step4: G 0
let level_order2 = function(node){
  if(node === null){
    return null;
  }
  let queue = new Queue();
  let str = ''; // 打印的字符串
  queue.enqueue(node);
  queue.enqueue(0);
  while(queue.size()>0){
    let dequeue_node = queue.dequeue();
    if(dequeue_node === 0){
      console.log(str);
      str = '';
      if(queue.isEmpty()){
        break;
      }else{
          queue.enqueue(0);
      }
        continue;
      }
    str += dequeue_node.data + ' ';

    if(dequeue_node.leftChild) queue.enqueue(dequeue_node.leftChild);
    if(dequeue_node.rightChild) queue.enqueue(dequeue_node.rightChild);

  }
  
}
level_order2(root_node);
