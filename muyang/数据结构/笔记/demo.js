//1.使用队列打印出杨辉三角
function yanghui(n) {
  const queue = [];
  queue.push(1, 0);
  let line = '';
  let pre = 0;
  let index = 0;
  while (true) {
    const top = queue.shift();
    if (top === 0) {
      console.log(line);
      if (index === n) {
        break;
      }
      index += 1;
      line = '';
      pre = 0;
      queue.push(1, 0);
      continue;
    }
    line += `${top} `;
    queue.push(top + pre);
    pre = top;
  }
}
// yanghui(5)

//2. 实现最大堆
class Node {
  constructor(key, value = null) {
    this.key = key;
    this.value = value;
  }
}

class MaxHeap {
  constructor(size = 100) {
    this.max_size = size;
    this.cur_size = 0;
    this.heap = [];
    this.root = null;
  }
  up_movement(n) {
    if (this.cur_size === 0) {
      return true;
    }
    let cur_index = n;
    let parent_index = Math.floor((cur_index - 1) / 2);
    const heap = this.heap;
    while (cur_index > 0) {
      if (heap[parent_index].key >= heap[cur_index].key) {
        break;
      } else {
        const temp = heap[parent_index];
        heap[parent_index] = heap[cur_index];
        heap[cur_index] = temp;
        cur_index = parent_index;
        parent_index = Math.floor((cur_index - 1) / 2);
      }
    }
  }
  insert(data) {
    let cur_size = this.cur_size;
    if (cur_size === this.max_size) {
      console.log('超出最大范围')
      return false;
    }
    const node = new Node(data);
    this.heap[cur_size] = node;
    this.up_movement(cur_size);
    this.cur_size += 1;
    return true;

  }
  init(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.insert(arr[i]);
    }
  }
}
const max_heap = new MaxHeap();
// max_heap.init([5, 2, 3, 8, 1])
// max_heap.insert(10)

//3.利用二叉搜索树实现一个简单的字典
class TreeNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
    this.parent = null;
  }
}
class Dict {
  constructor() {
    this.root = null;
  }

  set_tree_node(key, value) {
    // 向字典中添加key-value对
    return this.insert(key, value);
  }

  insert(key, value) {
    if (key === null) {
      return false;
    }
    if (!this.root) {
      this.root = new TreeNode(key, value);
      return true;
    }
    let cur_node = this.root;
    const new_node = new TreeNode(key, value);
    while (cur_node) {
      if (cur_node.key > key) {
        if (cur_node.leftChild) {
          cur_node = cur_node.leftChild;
        } else {
          new_node.parent = cur_node;
          cur_node.leftChild = new_node;
          break;
        }
      } else if (cur_node.key < key) {
        if (cur_node.rightChild) {
          cur_node = cur_node.rightChild;
        } else {
          new_node.parent = cur_node;
          cur_node.rightChild = new_node;
          break;
        }
      } else {
        cur_node.value = value;
      }
    }
    return true;
  }

  get_tree_node(key) {
    // 返回key所对应的value
    let cur_node = this.root;
    while (cur_node) {
      if (cur_node.key > key) {
        if (cur_node.leftChild) {
          cur_node = cur_node.leftChild;
          continue;
        }
        return null;
      } else if (cur_node.key < key) {
        if (cur_node.rightChild) {
          cur_node = cur_node.rightChild;
          continue;
        }
        return null;
      } else {
        return cur_node.value;
      }
    }
  }

  has_key = function (key) {
    return this.get_tree_node(key) !== null;
  }
};

var dict = new Dict();
dict.set_tree_node('name', 'javascript');
dict.set_tree_node('age', 20);
console.log(dict.has_key('class'));
console.log(dict.has_key('name'));
console.log(dict.get_tree_node("name"));
console.log(dict.get_tree_node("age"));

// 力扣230
var kthSmallest = function (root, k) {
  var dict = new Dict();
  for (let i = 0; i < root.length; i++) {
    if (root[i] !== null) {
      dict.set_tree_node(root[i])
    }
  }

  function top_k(root, k) {
    let cur_node = root;
    let stack = [];
    let index = 1;
    while (true) {
      while (cur_node) {
        stack.push(cur_node);
        cur_node = cur_node.leftChild;
      }
      const top = stack.pop();
      if (index === k) {
        return top.key;
      }
      index += 1;
      cur_node = top.rightChild;
      if (!cur_node && stack.length === 0) {
        console.log('没有找到');
        return null;
      }
    }

  }
  return top_k(dict.root, k);
};
console.log(kthSmallest([5, 3, 6, 2, 4, null, null, 1], 1))

// function merge(arr1, arr2) {
//   var merge_arr = [];
//   var index_1 = 0;
//   var index_2 = 0;

//   while (index_1 < arr1.length && index_2 < arr2.length) {
//     // 哪个数组的头部元素小,就合并谁,然后更新头的位置
//     if (arr1[index_1] <= arr2[index_2]) {
//       merge_arr.push(arr1[index_1]);
//       index_1++;
//     } else {
//       merge_arr.push(arr2[index_2]);
//       index_2++;
//     }
//   }

//   // arr1有剩余
//   if (index_1 < arr1.length) {
//     while (index_1 < arr1.length) {
//       merge_arr.push(arr1[index_1]);
//       index_1++;
//     }
//   }

//   // arr2有剩余
//   if (index_2 < arr2.length) {
//     while (index_2 < arr2.length) {
//       merge_arr.push(arr2[index_2]);
//       index_2++;
//     }
//   }

//   return merge_arr;
// };

// function merge_sort_ex(arr, start, end) {
//   if (start < end) {
//     // 分
//     var middle = Math.floor((start + end) / 2);
//     var arr1 = merge_sort_ex(arr, start, middle);
//     var arr2 = merge_sort_ex(arr, middle + 1, end);
//     console.log(arr1, arr2)
//     // 治
//     return merge(arr1, arr2);
//   }
//   return [arr[end]];
// };

// function merge_sort(arr) {
//   return merge_sort_ex(arr, 0, arr.length - 1);
// };


// var arr = [7, 2, 8, 1, 4, 6, 9, 3];
// // console.log(merge_sort(arr));


// function partition(arr, start, end) {
//   var pivotpos = start;
//   var pivot = arr[start];
//   // console.log(pivot)
//   for (var i = start + 1; i <= end; i++) {
//     if (arr[i] < pivot) {
//       pivotpos++;
//       if (pivotpos != i) {
//         // 将小于基准的值交换到左侧
//         var temp = arr[pivotpos];
//         arr[pivotpos] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   arr[start] = arr[pivotpos];
//   arr[pivotpos] = pivot;
//   // console.log(pivotpos, '=============');
//   return pivotpos;
// };

// function quick_sort_ex(arr, start, end) {
//   if (start < end) {
//     var pivotpos = partition(arr, start, end);
//     // console.log(pivotpos)
//     quick_sort_ex(arr, start, pivotpos - 1);
//     quick_sort_ex(arr, pivotpos + 1, end);
//   }
// }

// function quick_sort(arr) {
//   quick_sort_ex(arr, 0, arr.length - 1);
// }

// function bucket_sort(arr) {
//   var sort_arr = []
//   var buckets = new Array(4);
//   for (var i = 0; i < buckets.length; i++) {
//     buckets[i] = [];
//   }
//   // 放入对应的桶里
//   for (var i = 0; i < arr.length; i++) {
//     var index = Math.floor(arr[i] / 3);
//     buckets[index].push(arr[i])
//   }
//   // 对每一个桶进行排序
//   for (var i = 0; i < buckets.length; i++) {
//     quick_sort(buckets[i]);
//   }

//   // 搜集桶里的数据
//   for (var i = 0; i < buckets.length; i++) {
//     for (var j = 0; j < buckets[i].length; j++) {
//       sort_arr.push(buckets[i][j]);
//     }
//   }
//   return sort_arr;
// };

// var arr = [7, 2, 8, 1, 4, 6, 9, 3];
// sort_arr = bucket_sort(arr);
// // console.log(sort_arr);

// // var arr = [7, 2, 8, 1, 4, 6, 9, 3];
// // quick_sort(arr);
// // console.log(arr);


// // // function MinHeap(size) {
// // // var heap = new Array(size); // 数组
// // // var curr_size = 0; // 当前堆的大小
// // // var max_size = size; // 堆最大容量
// // // };

// // class MinHeap {
// //   constructor(size) {
// //     this.heap = new Array(size); // 数组
// //     this.curr_size = 0; // 当前堆的大小
// //     this.max_size = size; // 堆最大容量
// //   }

// //   shif_down(cur_pos, max_pos) {
// //     let parent_index = cur_pos;
// //     let min_child_index = parent_index * 2 + 1;
// //     let heap = this.heap;
// //     while (min_child_index <= max_pos) {
// //       if (min_child_index < max_pos && heap[min_child_index] > heap[min_child_index + 1]) {
// //         min_child_index = min_child_index + 1; // min_child_index永远指向值小的那个孩子
// //       }
// //       if (heap[min_child_index] >= heap[parent_index]) {
// //         break;
// //       } else {
// //         const temp = heap[parent_index];
// //         heap[parent_index] = heap[min_child_index];
// //         heap[min_child_index] = temp;
// //         parent_index = min_child_index;
// //         min_child_index = min_child_index * 2 + 1;
// //       }
// //     }
// //   }

// //   init(arr) {
// //     this.max_size = arr.length;
// //     this.curr_size = this.max_size;
// //     this.heap = new Array(arr.length);
// //     // 填充heap, 目前还不是一个堆
// //     for (var i = 0; i < this.curr_size; i++) {
// //       this.heap[i] = arr[i];
// //     }
// //     let cur_index = Math.floor((this.curr_size - 2) / 2);
// //     while (cur_index >= 0) {
// //       this.shif_down(cur_index, this.curr_size - 1);
// //       cur_index -= 1;
// //     }
// //     console.log(this.heap)
// //   }
// // }

// // const arr = [53, 17, 78, 9, 45, 65, 87, 23, 6];

// // const heap = new MinHeap(0);
// // heap.init(arr);

// var points = [
//   [1.24, 2.56],
//   [2.47, 5.84],
//   [6.27, 1.46],
//   [9.32, 4.98],
//   [5.21, 5.23],
//   [4.23, 1.23],
//   [6.29, 3.67],
//   [4.23, 8.34],
//   [3.21, 4.68],
//   [3.61, 4.23],
//   [4.78, 7.35],
//   [8.34, 2.57],
//   [7.32, 3.58],
//   [0.32, 3.94]
// ];

// var Point = function (x, y) {
//   this.x = x;
//   this.y = y;
// };

// function MyMap() {
//   var map = [];
//   for (var i = 0; i < 10; i++) {
//     map.push(new Array(10));
//   }

//   for (var i = 0; i < 10; i++) {
//     for (var j = 0; j < 10; j++) {
//       map[i][j] = [];
//     }
//   }

//   this.add_point = function (x, y) {
//     var point = new Point(x, y);
//     var index_1 = Math.floor(x);
//     var index_2 = Math.floor(y);
//     map[index_1][index_2].push(point);
//     // console.log(map, '=========')
//   };

//   var get_dis = function (x1, y1, x2, y2) {
//     return Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));
//   };

//   var get_index = function (index) {
//     if (index < 0) {
//       return 0;
//     }
//     if (index >= 10) {
//       return 9;
//     }
//     return index;
//   };

//   // 寻找距离(x,y)在dis以内的所有点
//   this.search = function (x, y, dis) {
//     var point_arr = []
//     // 缩小计算范围
//     var x_start = get_index(Math.floor(x - dis));
//     var x_end = get_index(Math.floor(x + dis));
//     var y_start = get_index(Math.floor(y - dis));
//     var y_end = get_index(Math.floor((y + dis)));
//     for (var i = x_start; i <= x_end; i++) {
//       for (var j = y_start; j <= y_end; j++) {
//         var points = map[i][j];
//         for (var k = 0; k < points.length; k++) {
//           if (get_dis(x, y, points[k].x, points[k].y) <= dis) {
//             point_arr.push(points[k]);
//           }
//         }
//       }
//     }

//     return point_arr;
//   }
// };

// var map = new MyMap();
// for (var i = 0; i < points.length; i++) {
//   map.add_point(points[i][0], points[i][1]);
// }

// var points = map.search(3, 3, 2);
// for (var i = 0; i < points.length; i++) {
//   console.log(points[i]);
// }