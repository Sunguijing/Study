function Queue() {
    var items = [];
    // enqueue 从队列尾部添加一个元素
    // dequeue 从队列头部删除一个元素
    // head 返回头部的元素，注意： 不是删除
    // size 返回队列大小
    // clear 清空队列
    // isEmpty 判断队列是否为空
    // tail 返回队列尾节点

    this.enqueue = function (item) { // enqueue 从队列尾部添加一个元素
        items.push(item);
    }
    this.dequeue = function () { // dequeue 从队列头部删除一个元素
        return items.shift();
    }
    this.head = function () { // head 返回头部的元素，注意： 不是删除
        return items[0];
    }
    this.tail = function () { // tail 返回队列尾节点
        return items[items.length - 1];
    }
    this.size = function () { // size 返回队列大小
        return items.length;
    }
    this.isEmpty = function() { // isEmpty 判断队列是否为空
        return items.length === 0;
    }
    this.clear = function() { // clear 清空队列
        items = [];
    }
}
let queue = new Queue(); // 实例化一个队列