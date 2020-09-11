import Tree from './Tree';
import Queue from '../队列/Queue';
const tree = new Tree();
tree.init_tree('A(B(D,E(G,H)),C(,F))#');
const root_node = tree.root;

// 杨辉三角思路去解题

//分层打印二叉树（困难模式+）
// A
// B  C
// D  E  F
// G
function level_order(node) {
	const queue = new Queue();
	queue.push(node);
	queue.push(0);
	let line = '';
	while (true) {
		var cur_node = queue.shift();
		if (cur_node === 0) {
			console.log(line);
			line = '';
			if (queue.isEmpty()) {
				break;
			}
			queue.push(0);
		} else {
			line += cur_node.data;
			var left = cur_node.leftChild;
			if (left) {
				queue.push(left);
			}
			var right = cur_node.rightChild;

			if (right) {
				queue.push(right);
			}
		}
	}
}

level_order(root_node);

// 输出指定层的节点个数（困难模式+）
// 实现函数get_width 返回第n层的节点个数

function get_width(node, n) {
	// 实现你的函数
	const queue = new Queue();
	let index = 0;
	let size = 1;
	queue.push(node);
	queue.push(0);
	while (true) {
		var cur_node = queue.shift();
		if (cur_node === 0) {
			index += 1;
			if (queue.isEmpty() || index === n) {
				return size;
			}
			size = queue.size();
			queue.push(0);
		} else {
			var left = cur_node.leftChild;
			if (left) {
				queue.push(left);
			}
			var right = cur_node.rightChild;

			if (right) {
				queue.push(right);
			}
		}
	}
}

console.log(get_width(root_node, 1));
console.log(get_width(root_node, 2));
console.log(get_width(root_node, 3));
console.log(get_width(root_node, 4));
