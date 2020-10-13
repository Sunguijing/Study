// console.log('----------homework-----------')
// // 创建栈
function Stack() {
    let stack = [];

    this.push = function(item){ // 向栈中添加元素
        stack.push(item);
    };
    this.pop = function(){ // 弹出栈顶元素（将栈顶元素拿出来，即删除栈顶元素）
        return stack.pop();
    };
    this.top = function(){ // 返回栈顶元素，不删除栈顶元素
        return stack[stack.length-1];
    };
    this.isEmpty = function(item){ // 判断栈里面的元素是否为空
        return stack.length === 0;
    };
    this.clear = function(){ // 清除栈里面的元素
        stack = [];
    };
    this.size = function(){
        return stack.length;
    }
}
// 1. 用两个栈来实现一个队列
// 栈是先进后出, 队列是先进先出,但可以用两个栈来模拟一个队列,请实现enqueue,
// dequeue, head三个方法

function stack_to_queue(item){
    let data_stack = new Stack();
    let null_stack = new Stack();
    // let data_stack, null_stack;
    // function init_stack(){
    //     if(stack1.isEmpty()){
    //         data_stack = stack2;
    //         null_stack = stack1;
    //     } else {
    //         data_stack = stack1;
    //         null_stack = stack2;
    //     }
    // }
    this.enqueue = function(item){
        // init_stack();
        if(data_stack.isEmpty()){
            data_stack.push(item);
        } else {
            null_stack.push(item);
        }
    };
    this.head = function(){ // 返回队列的头部元素,也就是栈的最底部的元素,故将有数据的栈数据依次移到空数据栈中,直到还剩下最后一个元素,则为栈底部元素
        // init_stack();
        if(data_stack.isEmpty()){
            while(null_stack.size() > 1) {
                data_stack.push(null_stack.pop());
            }
            return null_stack.top();
        }
        while(data_stack.size() > 1) {
            null_stack.push(data_stack.pop());
        }
        return data_stack.top();
    };
    this.dequeue = function(){ // 删除队列头部元素,则为删除有数据栈的底部元素,做法同this.head
        // init_stack();
        if(data_stack.isEmpty()){
            while(null_stack.size() > 1) {
                data_stack.push(null_stack.pop());
            }
            return null_stack.pop();
        }
        while(data_stack.size() > 1) {
            null_stack.push(data_stack.pop());
        }
        return data_stack.pop();
    }
}
// 测试
let Stack_to_queue = new stack_to_queue();
Stack_to_queue.enqueue(1);
Stack_to_queue.enqueue(2);
Stack_to_queue.enqueue(3);
Stack_to_queue.enqueue(4);
console.log(Stack_to_queue.head());
console.log(Stack_to_queue.dequeue());
console.log(Stack_to_queue.dequeue());



// 作业2： 迷宫
// 思路： 一个二维数组，