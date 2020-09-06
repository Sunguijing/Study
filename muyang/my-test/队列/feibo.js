"use strict";
/**
 * 斐波那契数列
 * f(n) = f(n-1)+ f(n-2)
 *
*/
exports.__esModule = true;
var Queue_1 = require("./Queue");
function feibo(n) {
    var queue = new Queue_1["default"]();
    queue.push(1);
    queue.push(1);
    var index = 0;
    while (index < n - 2) {
        index += 1;
        var one_val = queue.shift();
        var two_val = queue.top();
        var add_val = one_val + two_val;
        queue.push(add_val);
    }
    queue.shift();
    return queue.top();
}
console.log(feibo(10));
