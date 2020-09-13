// 有一个数组a[100]存放0-99，要求每隔两个数删除一个数，到末尾时循环至开头继续进行，
// 求最后一个被删除的数

// 思路
// 从队列头部删除一个元素，index+1
// 如果Index%3 == 0，就说明这个元素被删除，如果不是需要被删除的，则加入队列的尾部

function queue_last_num(array) {
    let queue = new Queue();
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        queue.enqueue(array[i]);
    }
    while (queue.size() != 1) {
        let num = queue.dequeue();
        index++;
        if (index % 3 != 0) {
            queue.enqueue(num);
        }
    }
    return queue.head();
}
// 测试
let arr_list = [];
for (let i = 0; i < 100; i++) {
    arr_list.push(i);
}
// console.log(queue_last_num(arr_list));

// 题二： 斐波那契数列，使用队列计算出数列的第n项
// 概念： 数列 1，1 , 后面的数为前两个数之和：Fn = F(n-1) + F(n-2);

// 思路： 先将前面两个1放入，之后使用while循环，用index计数，循环终止的条件是index < n-2
// 先将队列中元素删除一个记录为a,获取头部元素为b,则下一个元素就是a+b,然后重复以上步骤，直到index<n-2
// 最后队列中还有两个数，第N个数就是队列新加入的尾部元素，但是队列只能从队首获取元素，故先删除一个元素
function computed_n_num(n) {
    if (n < 3) return 1;
    let index = 0;
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(1);
    while (index < n - 2) {
        let del_num = queue.dequeue();
        let head_num = queue.head();
        let next_num = del_num + head_num;
        // 将计算结果放入队列中
        queue.enqueue(next_num);
        index++;
    }
    queue.dequeue()
    return queue.head();
}
// 测试
// console.log(computed_n_num(3));

// 用两个队列实现栈（困难模式）
// 队列：先进先出
// 栈：  先进后出
// 思路： 比如实现栈的top(),push(),pop()方法
// 定义两个队列分别为queue1, queue2, 
// 栈的top()取的是队的队尾元素，只需要返回不为空的队列的尾部元素即可
// 栈的push()添加元素，只需要向有数据的队列enqueue即可，如果两个队列都为空，则向queue1队列添加元素
// 栈的pop()方法，删除栈顶元素，可以定义queue1队列为有数据的队列，删除的是queue1的队尾元素，但是队列先进先出，只能删除队首元素，所以借助queue2队列
//          将queue1队列元素一次删除队首元素，添加到queue2队列中，直到queue1里面只有一个元素为止，则这个元素即为要删除的元素
// 这里面每次实现栈方法的时候，都需要判断queue1和queue2哪个为有数据的队列，哪个为无数据的队列，所以可以定义一个方法，用来
// 明确指向有数据的队列和无数据的队列, 当两个队列都为空时，则有数据指向queue1
function queue_to_stack(item) {
    let queue1 = new Queue();
    let queue2 = new Queue();
    let data_queue, null_queue;
    function init() {
        if (queue1.isEmpty() && !queue2.isEmpty()) {
            data_queue = queue2;
            null_queue = queue1;
        } else {
            data_queue = queue1;
            null_queue = queue2;
        }
    }

    this.push = function (item) {
        init();
        data_queue.enqueue(item);
    };
    this.top = function(){
        init();
        return data_queue.tail();
    };
    this.pop = function(){
        init();
        while(data_queue.size() > 1) {
            let val = data_queue.dequeue();
            null_queue.enqueue(val);
        }
        
        return data_queue.dequeue();
    }

}
// 测试
let Queue_to_stack = new queue_to_stack();
Queue_to_stack.push(3);
Queue_to_stack.push(2);
Queue_to_stack.push(1);
// console.log(Queue_to_stack.top());
// console.log(Queue_to_stack.pop());
// console.log(Queue_to_stack.pop());

// 打印杨辉三角
// 思路： 杨辉三角的规律是： 一个数字和最后一个数字都是1，其他的数字规律为：f(i)(j) = f(i-1)(j-1) + f(i-1)(j)，并且
//        有n行，则第n行的数字个数则为n


function alert_yanghuisanjiao(n){
    let queue = new Queue();
    queue.enqueue(1); // 先将1输入
    for(let i=1;i<=n;i++){
        let line = "";
        let pre_num = 0;
        for(let j=0;j<i;j++){
            let item = queue.dequeue();
            line += item + " ";
            let val = item + pre_num;
            pre_num = val;
            queue.enqueue(pre_num);
        }
        queue.enqueue(1);
        console.log(line);
    }
}
// 测试
alert_yanghuisanjiao(5);

function alert_yanghuisanjiao_2(n){

}



