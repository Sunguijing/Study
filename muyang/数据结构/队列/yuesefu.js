"use strict";
exports.__esModule = true;
/**
 * 约瑟夫环
 * 有一个数组 [0-100] 要求每隔两个数删掉一个数，到末尾时循环至开头继续进行,求最后一个被删掉的数
 */
var Queue_1 = require("./Queue");
function qusef(num) {
    var queue = new Queue_1["default"]();
    for (var i = 0; i < num; i++) {
        queue.push(i);
    }
    var index = 0;
    var item;
    while (queue.size() > 2) {
        index += 1;
        item = queue.shift();
        if (index % 3) {
            queue.push(item);
        }
    }
    return queue.top();
}
console.log(qusef(100));
