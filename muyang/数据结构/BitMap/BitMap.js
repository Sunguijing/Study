"use strict";
// 大量数据时 用二进制位来存数据 32
exports.__esModule = true;
var BitMap = /** @class */ (function () {
  function BitMap(capacity) {
    //32个数为一组 位运算用
    this.size = 32;
    // bit 数据 正数
    this.bit_data = [];
    // bit 负数
    this.negative_bit_data = [];
    this.capacity = capacity;
    // 32存储
    this.init_bit();
  }
  //初始化bit
  BitMap.prototype.init_bit = function () {
    var capacity = this.capacity;
    var arr = Array.from({ length: capacity }, function () { return 0; });
    this.bit_data = arr;
  };
  //获取指定点
  BitMap.prototype.get_dot = function (num) {
    var re_num = Math.abs(num);
    // 超出承受范围
    if (re_num > this.size * this.capacity) {
      return { isError: true };
    }
    var bitDataIndex = re_num >> 5; // bit_data中第几个数
    var bitIndex = re_num & 0x1f; // 0x1f代表31 因为从 0 开始 // bitIndex 索引
    return { bitDataIndex: bitDataIndex, bitIndex: bitIndex };
  };
  // 拆开两个地方用
  BitMap.prototype.re_is_exist = function (bitDataIndex, bitIndex, isError, num) {
    if (isError) {
      console.log('==========查询失败,超过最大范围===========');
      return false;
    }
    var curNum = num < 0 ? this.negative_bit_data[bitDataIndex] : this.bit_data[bitDataIndex];
    return !!(curNum & (1 << bitIndex));
  };
  // 添加bit
  BitMap.prototype.add = function (num) {
    var _a = this.get_dot(num),
      bitDataIndex = _a.bitDataIndex,
      bitIndex = _a.bitIndex,
      isError = _a.isError;
    if (isError) {
      console.log('==========添加失败,超过最大范围===========');
      return null;
    }
    if (num < 0) {
      this.negative_bit_data[bitDataIndex] |= 1 << bitIndex;
    }
    else {
      this.bit_data[bitDataIndex] |= 1 << bitIndex;
    }
  };
  //判断某个数存不存在
  BitMap.prototype.is_exist = function (num) {
    var _a = this.get_dot(num),
      bitDataIndex = _a.bitDataIndex,
      bitIndex = _a.bitIndex,
      isError = _a.isError;
    return this.re_is_exist(bitDataIndex, bitIndex, isError, num);
  };
  // 清除
  BitMap.prototype.clear = function (num) {
    var _a = this.get_dot(num),
      bitDataIndex = _a.bitDataIndex,
      bitIndex = _a.bitIndex,
      isError = _a.isError;
    var flag = this.re_is_exist(bitDataIndex, bitIndex, isError, num);
    if (!flag) {
      return new Error('清除节点不存在');
    }
    //将1左移position后，那个位置自然就是1，然后对取反，再与当前值做&，即可清除当前的位置了
    if (num < 0) {
      this.negative_bit_data[bitDataIndex] &= ~(1 << bitIndex);
    }
    else {
      this.bit_data[bitDataIndex] &= ~(1 << bitIndex);
    }
    return true;
  };
  return BitMap;
}());
var bitMap = new BitMap(100);
bitMap.add(0);
bitMap.add(1);
bitMap.add(2);
bitMap.add(-1);
bitMap.add(-2);
console.log(bitMap.is_exist(0));
console.log(bitMap.is_exist(-1));
console.log(bitMap.clear(0));
console.log(bitMap.is_exist(0));
console.log(bitMap.clear(-1));
console.log(bitMap.is_exist(-1));
exports["default"] = BitMap;