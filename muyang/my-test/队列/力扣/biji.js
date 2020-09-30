class Queue {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.shift()
  }
  top() {
    return this.items[0]
  }
  size() {
    return this.items.length
  }
  isEmpty() {
    return this.size() === 0
  }
  clear() {
    this.items = [];
  }
}

var maxSlidingWindow = function (nums, k) {
  if (k === 1) return nums;
  const length = nums.length;
  if (!length) return [];

  const left = new Array(length);
  const right = new Array(length);

  left[0] = nums[0];
  right[length - 1] = nums[length - 1];
  for (let i = 1; i < length; ++i) {
    if (i % k) {
      left[i] = Math.max(nums[i], left[i - 1]);
    } else {
      left[i] = nums[i];
    }

    let j = length - i - 1;
    if ((j + 1) % k) {
      right[j] = Math.max(nums[j], right[j + 1]);
    } else {
      right[j] = nums[j];
    }
  }

  const res = [];
  for (let i = 0; i < length - k + 1; i++) {
    res.push(Math.max(right[i], left[i + k - 1]));
  }
  console.log(right, left)
  console.log(res)
  return res;
};
maxSlidingWindow([1, 3, -1, 8, 5, 3, 6, 7], 3)
  // 起点(0,0)=>(6,6)
  // 初始化地图
  ! function () {
    function init_map(row, col) {
      const map_data = Array.from({ length: row }, () => Array.from({ length: col }, () => 0));
      return function (barriers = []) { // 设置障碍物
        for (let i = 0; i < barriers.length; i++) {
          let { r, c } = barriers[i];
          map_data[r][c] = 1;
        }
        return map_data;
      }
    }
    //越界
    function break_border(map, r, c) {
      const row = map.length;
      const col = map[0].length;
      return r > row || r < 0 || c > col || c < 0
    }

    // 迷宫
    function maze(maze_map, origin, target) {
      const queue = new Queue();
      queue.push({ ...origin, step: 0 });
      while (true) {
        if (queue.isEmpty()) {
          console.log('没有出口');
          break;
        }
        let { r, c, step } = queue.pop();
        if (break_border(maze_map, r, c)) {
          console.log('越界');
          continue;
        }
        if (r === target.r && c === target.c) {
          console.log(step)
          return step;
        }
        step += 1;
        for (let i = 0; i < directions.length; i++) {
          const [y, x] = directions[i];
          const next_r = y + r;
          const next_c = x + c;
          if (origin.r === next_r && next_c === origin.c) { // 起点
            continue;
          }
          if (break_border(maze_map, next_r, next_c)) { // 越界
            continue;
          }
          if (pass_path.includes(`${next_r}#${next_c}`)) { // 已走
            continue;
          }
          if (maze_map[next_r][next_c] === 1) { // 障碍物
            continue;
          }
          pass_path.push(`${next_r}#${next_c}`); // 把当前路径存进去 防止重复走
          queue.push({ r: next_r, c: next_c, step: step }) // 入队列
        }
      }
    }
    const directions = [
      [-1, 0], //上
      [1, 0], // 下 
      [0, -1], //左
      [0, 1] // 右
    ];
    const pass_path = []; // 已经走过的
    const barriers = [{ r: 1, c: 2 }, { r: 1, c: 3 }, { r: 5, c: 5 }];
    let map_info = init_map(10, 10)(barriers);
    // maze(map_info, { r: 0, c: 0 }, { r: 3, c: 4 });
  }()


// class Stack {
//   constructor() {
//     this.items1 = new Queue(); // push时存放数据
//     this.items2 = new Queue(); // 操作的数据
//     this.data = this.item1;
//     this.save_data = this.item2;
//   }
//   push(item) {
//     if (this.items1.isEmpty()) {
//       this.items2.push(item);
//     } else {
//       this.items1.push(item);
//     }
//   }
//   dispose_data() {
//     if (this.items1.isEmpty()) {
//       this.data = this.items2;
//       this.save_data = this.items1;
//     } else {
//       this.data = this.items1;
//       this.save_data = this.items2;
//     }
//   }
//   pop() {
//     this.dispose_data();
//     while (this.data.size() !== 1) {
//       this.save_data.push(this.data.pop())
//     }
//     return this.data.pop();
//   }
//   top() {
//     this.dispose_data();
//     let cur_item;
//     while (!this.data.isEmpty()) {
//       cur_item = this.data.pop();
//       this.save_data.push(cur_item)
//     }
//     return cur_item;
//   }
// }
// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// console.log(stack.pop());
// console.log(stack.top());
// stack.push(5);
// console.log(stack.pop());
// console.log(stack.top());
// 
// function yh(n) {
// const queue = new Queue();
// queue.push(1);
// queue.push(0);
//   for (let i = 0; i < n; i++) {
// let line = '';
// let pre_item = 0;
//     while (true) {
//       const cur_item = queue.pop();
//       if (cur_item === 0) {
//         queue.push(1);
//         queue.push(0);
//         break;
//       }
//       line += `,${cur_item}`;
//       const value = pre_item + cur_item;
//       pre_item = cur_item;
//       queue.push(value);
//     }
//     console.log(line);
//   }
// }

// yh(5);

// function yh(n) {
//   const queue = new Queue();
//   queue.push(1);
//   queue.push(0);
//   let line = '';
//   let pre_item = 0;
//   let index = 0;
//   let cur_item;
//   while (index !== n) {
//     cur_item = queue.pop();
//     if (cur_item === 0) {
//       queue.push(1);
//       queue.push(0);
//       index += 1;
//       pre_item = 0;
//       console.log(line);
//       line = '';
//     } else {
//       line += ` ${cur_item}`;
//       const value = pre_item + cur_item;
//       pre_item = cur_item;
//       queue.push(value);
//     }
//   }
// }

// yh(5);


// function qusef(num) {
//   const queue = new Queue();
//   for (let i = 0; i < num; i++) {
//     queue.push(i);
//   }
//   let i = 0;
//   while (queue.size() > 2) {
//     i += 1;
//     let pop_item = queue.pop();
//     if (i % 3 !== 0) {
//       queue.push(pop_item);
//     }
//   }
//   return queue.top();
// }

// console.log(qusef(100));


// function fibonacci(n) {
//   const queue = new Queue();
//   let index = 0;
//   queue.push(1);
//   queue.push(1);
//   while (index < n - 2) {
//     index += 1;
//     const first_item = queue.pop();
//     const second_item = queue.top();
//     queue.push(first_item + second_item)
//   }
//   queue.pop();
//   return queue.top();
// }

// console.log(fibonacci(5))