// 使用栈，完成中序表达式转后续表达式
// 例如： 运算表达式： 1+(4-2)/2  
// 对于中序表达式： ["1","+","(","4","-","2",")","/","2"]
// 对应后续表达式： [1,4,2,-,2,/,+]
let symbol_index = {
    "+": 1,
    "/": 1,
    "*": 2,
    "/": 2
}
function infix_exp_postfix_exp(exp){
    // 思路：定义个空数组，遍历传进来的中序表达式，如果是数字，则直接进入数组中，如果遇到()，则进行判断，当为(,则
    // 存入栈中，如果遇到)，则将栈中元素从栈顶依次加入数组中，直到弹出的元素为(, 如果是+-*/，则加入栈中，当运算符
    // 的优先级大于栈顶的优先级，则加入数组中
    let stack = new Stack();
    let postfix_exp = [];
    console.log(exp);
    for(let i=0;i<exp.length;i++){
        let val = exp[i];
        // 先将数字存入后续数组里
        if(!isNaN(val)){
            postfix_exp.push(val);
        } else if(val == "("){ // 如果是(，就放入栈中
            stack.push(val);
        } else if(val == ")"){ // 如果是)，就将栈中元素从栈顶一次取出放到后续数组里
            while(stack.top() != "("){
                postfix_exp.push(stack.pop());
            }
            stack.pop();
        } else { // 处理剩下的+-*/
            while(!stack.isEmpty() && ["+","-","*","/"].indexOf(stack.top()) > -1 && symbol_index[stack.top()] >= symbol_index[val]){
                postfix_exp.push(stack.pop());
            }
            stack.push(val);

        }
        
    }
    while(!stack.isEmpty()) { // 将栈中剩余未处理运算符加入数组中
        postfix_exp.push(stack.pop())
    }
    return postfix_exp;
}

// 验证
let array = ["1", "+","(","4","/","2",")","/","2"];
console.log(infix_exp_postfix_exp(array));
let array2 = ["1","+","2","+","3"];
console.log(infix_exp_postfix_exp(array2));
