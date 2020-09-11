import Tree from './Tree';
import Stack from '../栈/Stack';
const str = 'A(B(D,E(G,))C(,F))#';
const tree = new Tree();
tree.init_tree(str);

// 非递归实现 前 中 遍历  不用递归就用while + 栈

// 前
function pre_order(root) {
	const stack = new Stack();
	let node = root;
	while (node) {
		if (node.rightChild) {
			stack.push(node.rightChild);
		}
		if (!node.leftChild) {
			console.log(node);
			node = stack.pop();
		} else {
			stack.push(node.leftChild);
			node = node.leftChild;
		}
	}
}

// pre_order(tree.root);

// 中
function in_order(root) {
	const stack = new Stack();
	let node = root;
	while (true) {
		while (node) {
			stack.push(node);
			node = node.leftChild;
		}
		console.log(stack.size());
		var top_node = stack.pop();
		node = top_node.rightChild;
		if (!node && stack.isEmpty()) {
			break;
		}
		// console.log(top_node)
		// if (top_node && top_node.rightChild) {
		//   node = top_node.rightChild;
		// }
	}
}

in_order(tree.root);
