"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
function strMatch(str) {
    var stack = new Stack_1["default"]();
    var item;
    for (var i = 0; i < str.length; i++) {
        item = str[i];
        if (item === '(') {
            stack.push(item);
        }
        else if (item === ')') {
            if (stack.size() === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.size() === 0;
}
var str = '(1dasdda()dasdasd(a)s)';
console.log(strMatch(str));
var str1 = ')';
console.log(strMatch(str1));
