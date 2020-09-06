// 创建栈
let a = 11;
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
    }
 }
