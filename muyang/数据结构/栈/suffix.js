"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
//逆波兰  -- 后缀表达式
var symbols = ['+', '-', '*', '/'];
function suffix(arr) {
    var stack = new Stack_1["default"]();
    var item;
    for (var i = 0; i < arr.length; i++) {
        item = arr[i];
        if (symbols.includes(item)) {
            if (stack.size() < 2) {
                return new Error("\u4F20\u5165\u6570\u636E\u6709\u8BEF,index\u4E3A" + i);
            }
            var value_1 = stack.pop();
            var value_2 = stack.pop();
            stack.push(parseInt(eval("" + value_2 + item + value_1)));
        }
        else {
            stack.push(item);
        }
    }
    if (stack.size() !== 1) {
        return new Error('传入数据有误');
    }
    return stack.pop();
}
// var arr = [ '4', '13', '5', '/', '+' ];
// var arr = [ '10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+' ];
var arr = ['2', '3', '-', '2', '+'];
console.log(suffix(arr));
exports["default"] = suffix;
