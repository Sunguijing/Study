function Stack(){
    var items = []; //存储数据

    // 从栈顶添加元素，也叫压栈
    this.push = function(item) {
        items.push(item);
    }

    // 弹出栈顶元素
    this.pop = function() {
        return items.pop();
    }

    // 返回栈顶元素
    this.top = function() {
        return items[items.length - 1];
    }

    // 判断栈是否为空
    this.isEmpty = function() {
        return items.length === 0;
    }

    // 返回栈的大小
    this.size = function() {
        return items.length;
    }

    // 清空栈
    this.clear = function() {
        items = [];
    }
}

// 判断字符串里的括号是否合法
// function is_leagl_brackets(string) {
//     var stack = new Stack();
//     for(var i = 0; i < string.length; i++) {
//         var item = string[i];
//         if(item == "("){
//             stack.push(item);
//         } else if (item == ")"){
//             if (stack.isEmpty()){
//                 return false;
//             } else {
//                 stack.pop();
//             } 
//         }
//     }
//     return stack.isEmpty();
// }

function is_leagl_brackets(string) {
    var stack = [];
    for(var i = 0; i < string.length; i++) {
        var item = string[i];
        if(item == "("){
            stack.push(item);
        } else if (item == ")"){
            if (stack.length == 0){
                return false;
            } else {
                stack.pop();
            } 
        }
    }
    if(stack.length == 0) {
        return true;
    }else{
        return false;
    }
}

console.log(is_leagl_brackets("sdasds(sdd(sdddd(dssd)sd)sds)"));
console.log(is_leagl_brackets("adasd())))"))
console.log(is_leagl_brackets("())adasd(()("))
