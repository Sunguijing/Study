"use strict";
exports.__esModule = true;
var BitMap_1 = require("./BitMap");
// 两个数组 请用bitMap 计算他们的交集
var arr1 = [1, 4, 6, 8, 9, 10, 15];
var arr2 = [6, 14, 9, 2, 0, 7, 10];
function intersection(arr1, arr2) {
    var bitMap1 = new BitMap_1["default"](100);
    var arr = [];
    // const bitMap2 = new BitMap(100);
    for (var i = 0; i < arr1.length; i++) {
        bitMap1.add(arr1[i]);
    }
    for (var i = 0; i < arr2.length; i++) {
        if (bitMap1.is_exist(arr2[i])) {
            arr.push(arr2[i]);
        }
    }
    return arr;
}
console.log(intersection(arr1, arr2));
