// 这里leetcode中是栈的练习题，0305 栈排序
/*** 思路： 该题主要是给栈中元素排序，主要操作在Push阶段，定义两个栈，一个栈用来放数据，当新push一个数据val的时候，
* 用这个数据val和栈1里面的数据进行比较，如果是栈1里面的数据大，则将val直接加入栈1中，
* 如果不是，则证明栈里面的数据小，则栈1里面的数据小于val，则把栈1里面数据依次加入辅助的栈2里面，
* 直到两种情况结束，一是当加入元素小于栈中元素，二是栈中元素全部移至栈2中，push完成
**/
var SortedStack = function () {
    this.stack = new Array();
    this.helpStack = new Array();
};
SortedStack.prototype.push = function (val) {
    if (this.stack.length == 0) {
        this.stack.push(val);
    } else {
        while (this.stack.length != 0) {
            let num = this.stack[this.stack.length - 1];
            if (num > val) {
                this.stack.push(val);
                break;
            } else {
                this.helpStack.push(this.stack.pop());
            }
        }
        if (this.stack.length == 0) {
            this.stack.push(val);
        }
        while (this.helpStack.length !== 0) {
            this.stack.push(this.helpStack.pop());
        }
    }
};
SortedStack.prototype.pop = function () {
    return this.stack.pop();
};
SortedStack.prototype.peek = function () {
    if (this.stack.length == 0) {
        return -1;
    } else {
        return this.stack[this.stack.length - 1];
    }
};
SortedStack.prototype.isEmpty = function () {
    return this.stack.length === 0;
};