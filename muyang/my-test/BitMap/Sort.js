"use strict";
exports.__esModule = true;
var BitMap = /** @class */ (function () {
    function BitMap(size) {
        if (size === void 0) { size = 0; }
        this.size = 0;
        this.bit_arr = [];
        this.size = size;
        // this.init_bit(size);
    }
    BitMap.prototype.init_bit = function (size) {
        this.bit_arr = Array.from({ length: size }, function () { return 0; });
    };
    BitMap.prototype.sort = function (arr, maxNum) {
        var max_num = maxNum;
        var size = this.size;
        var length = Math.ceil(max_num / size);
        this.init_bit(length);
        for (var i = 0; i < arr.length; i++) {
            this.set_bit(arr[i]);
        }
        for (var i = 0; i < maxNum + 1; i++) {
            if (this.is_exist(i)) {
                console.log(i);
            }
        }
    };
    BitMap.prototype.set_bit = function (num) {
        var cur_index = Math.floor(num / this.size);
        var remainder = num % this.size;
        var bitNum = this.bit_arr[cur_index];
        this.bit_arr[cur_index] = bitNum | (1 << remainder);
    };
    BitMap.prototype.is_exist = function (num) {
        var cur_index = Math.floor(num / this.size);
        var remainder = num % this.size;
        var bitNum = this.bit_arr[cur_index];
        var value = bitNum & (1 << remainder);
        return value !== 0;
    };
    return BitMap;
}());
var bitMap = new BitMap(10);
var arr = [3, 5, 2, 10, 6, 12, 8, 14, 9];
bitMap.sort(arr, 14);
// console.log(bitMap);
exports["default"] = BitMap;
