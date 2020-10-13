"use strict";
exports.__esModule = true;
// 中缀表达式 -> 后缀表达式
var Stack_1 = require("./Stack");
var suffix_1 = require("./suffix");
var symbols = ['+', '-', '*', '/'];
function isSymbol(symbol) {
    return symbols.includes(symbol);
}
var SymbolEnum;
(function (SymbolEnum) {
    SymbolEnum[SymbolEnum["+"] = 1] = "+";
    SymbolEnum[SymbolEnum["-"] = 1] = "-";
    SymbolEnum[SymbolEnum["*"] = 2] = "*";
    SymbolEnum[SymbolEnum["/"] = 2] = "/";
})(SymbolEnum || (SymbolEnum = {}));
function tansit_queen(arr) {
    var stack = new Stack_1["default"]();
    var result = [];
    var item;
    for (var i = 0; i < arr.length; i++) {
        item = arr[i];
        if (item === '(') {
            stack.push(item);
        }
        else if (item === ')') {
            var top_1 = void 0;
            while (((top_1 = stack.pop()), top_1 !== '(')) {
                result.push(top_1);
            }
        }
        else if (isSymbol(item)) {
            if (!stack.isEmpty() && SymbolEnum[stack.top()] > SymbolEnum[item]) {
                result.push(stack.pop());
            }
            stack.push(item);
        }
        else {
            result.push(item);
        }
    }
    while (stack.size() > 0) {
        result.push(stack.pop());
    }
    return result;
}
// 12 + 10 / 5 + 6
var exp = [
    '(',
    '1',
    '+',
    '(',
    '4',
    '+',
    '5',
    '+',
    '3',
    ')',
    '/',
    '4',
    '-',
    '3',
    ')',
    '+',
    '(',
    '(',
    '6',
    '+',
    '8',
    ')',
    '*',
    '3',
    ')'
];
var arr = tansit_queen(exp);
console.log(suffix_1["default"](arr));
