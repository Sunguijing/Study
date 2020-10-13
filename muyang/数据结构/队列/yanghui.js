"use strict";
/**
 * 杨辉三角
 * 1
 * 11
 * 121
 * 1331
 * 14641
*/
exports.__esModule = true;
var Queue_1 = require("./Queue");
function yanghui(n) {
    var queue = new Queue_1["default"]();
    queue.push(1);
    queue.push(0);
    for (var i = 0; i < n; i++) {
        var pre = 0;
        var line = '';
        var item = void 0;
        while (true) {
            item = queue.shift();
            if (item === 0) {
                queue.push(1);
                queue.push(0);
                break;
            }
            line += ' ' + item;
            var value = item + pre;
            pre = item;
            queue.push(value);
        }
        console.log(line);
    }
}
yanghui(6);
function yanghui2(n) {
    var queue = new Queue_1["default"]();
    queue.push(1);
    for (var i = 1; i < n; i++) {
        var pre = 0;
        var line = '';
        var item = void 0;
        for (var j = 0; j < i; j++) {
            item = queue.shift();
            line += " " + item;
            var value = item + pre;
            pre = item;
            queue.push(value);
        }
        queue.push(1);
        console.log(line);
    }
}
yanghui2(10);
