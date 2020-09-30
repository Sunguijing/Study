"use strict";
exports.__esModule = true;
var Queue_1 = require("./Queue");
var maze_array = [
  [0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0]
];
var byWalks = []; // 存已经走过的节点
var direction = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0] // 上 下 左 右
];

function isCrossBorder(x, y) {
  var borderX = maze_array[0].length;
  var borderY = maze_array.length;
  return borderX < x || borderY < y || y - 1 < 0 || x - 1 < 0;
}

function isObstacle(x, y) {
  return !!maze_array[y - 1][x - 1];
}

function maze(y, x) {
  if (isCrossBorder(x, y))
    return;
  var queue = new Queue_1["default"]();
  var step1;
  queue.push([1, 1, 0]);
  var _loop_1 = function () {
    var _a = queue.shift(),
      y1 = _a[0],
      x1 = _a[1],
      step = _a[2];
    if (y1 === y && x1 === x) {
      step1 = step;
      return "break";
    }
    if (!isCrossBorder(x1, y1) && !isObstacle(x1, y1)) {
      console.log(x1, y1);
      step += 1;
      direction.forEach(function (item) {
        var directionx = item[0],
          directiony = item[1];
        var nextX = x1 + directionx;
        var nextY = y1 + directiony;
        if (!(byWalks[nextY] && byWalks[nextY][nextX])) {
          if (!byWalks[nextY]) {
            byWalks[nextY] = [];
          }
          byWalks[nextY][nextX] = true;
          queue.push([nextY, nextX, step]);
        }
      });
    }
  };
  while (!queue.isEmpty()) {
    var state_1 = _loop_1();
    if (state_1 === "break")
      break;
  }
  console.log(step1);
}
maze(9, 3);