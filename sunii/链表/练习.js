 // 节点
// let Node = function(data){
//     this.data = data;
//     this.next = null;
// }

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(5);

// console.log(node1.data);

// 定义链表类
function LinkList() {
    // 定义节点
    let Node = function(data){
        this.data = data;
        this.next = null;
    }

    let length = 0; // 长度
    let head = null; // 头节点
    let tail = null; // 尾节点

    this.append = function(data){ // 在尾部添加节点
        // 创建新节点
        let new_node = new Node(data);
        if(head == null){
            head = new_node;
            tail = new_node;
        } else {
            tail.next = new_node;
            tail = new_node;
        }
        length += 1;
        return true;
    };
    this.print = function(){ // 打印节点
        let curr_node = head;
        while(curr_node){
            console.log(curr_node.next);
            curr_node = curr_node.next;
        }
    };
    this.insert = function(index, data){
        if(index<0 || index>length){
            return false;
        }else if(index == length){
            return this.append(data);
        }else{
            let new_node = new Node(data);
            // ne w_node变成新的头节点
            if(index==0){
                new_node.next = head;
                head = new_node;
            }else{
                let insert_index = 1;
                let curr_node = head;
                while(inset_index < index){
                    insert_index += 1;
                    curr_node = curr_node.next;
                }
                // 当循环结束
                let next_node = curr_node.next;
                curr_node.next = new_node;
                new_node.next = next_node;
            }
            length += 1;
            return true;
        }
    };
    this.remove = function(index){
        if(index < 0 || index >= length) {
            return null;
        } else {
            let del_node = null;
            if(index == 0){
                del_node = head;
                head = head.next;
            }else{
                let del_index = 0;
                let pre_node = null; // 被删除节点的前一个节点
                let curr_node = head; // curr_node就是那个要被删除的节点

                while(del_index < index){
                    del_index += 1;
                    pre_node = curr_node;
                    curr_node = curr_node.next;
                }
                del_node = curr_node;
                // 被删除节点的前一个指向，被删除节点的后一个节点
                pre_node.next = curr_node.next;
                // 如果删除的是尾节点
                if(curr_node.next == null){
                    tail = pre_node;
                }
            }
            length -= 1;
            del_node.next = null;
            return del_node.data;
        }
    }
};

let link = new LinkList();
link.append(2);
link.append(3);
link.append(4);

link.print();

