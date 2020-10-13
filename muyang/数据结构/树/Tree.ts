// 广义表创建二叉树
// A(B(D,E(G,))C(,F))#
import Stack from '../栈/Stack';
class TreeNode {
	public data;
	public leftChild; // 左
	public rightChild; // 右
	public parentNode; // 父
	constructor(data) {
		this.data = data;
	}
}

class Tree {
	public root = null;
	public init_tree(str) {
		let item;
		let k = 1;
		const stack = new Stack();
		let new_node = null;
		for (let i = 0; i < str.length; i++) {
			item = str[i];
			if (item === '#') {
				break;
			}
			if (item === '(') {
				stack.push(new_node);
				k = 1;
			} else if (item === ')') {
				stack.pop();
			} else if (item === ',') {
				k = 2;
			} else {
				new_node = new TreeNode(item);
				if (this.root === null) {
					this.root = new_node;
					continue;
				}
				const parent_node = stack.top();
				if (k === 1) {
					parent_node.leftChild = new_node;
				} else if (k === 2) {
					parent_node.rightChild = new_node;
				}
				new_node.parentNode = parent_node;
			}
		}
		return this.root;
	}
	private pr_in_order(node) {
		if (!node) return;
		this.pr_in_order(node.leftChild);
		console.log(node.data);
		this.pr_in_order(node.rightChild);
	}
	private pr_pre_order(node) {
		if (!node) return;
		console.log(node.data);
		this.pr_in_order(node.leftChild);
		this.pr_in_order(node.rightChild);
	}
	private pr_size(node) {
		if (!node) return 0;
		const left = this.pr_size(node.leftChild);
		const right = this.pr_size(node.rightChild);
		return left + right + 1;
	}
	public in_order() {
		// 中序遍历
		this.pr_in_order(this.root);
	}
	public pre_order() {
		//前序遍历
		this.pr_pre_order(this.root);
	}

	public post_order(node) {
		if (node == null) {
			return;
		}
		this.post_order(node.leftChild);
		this.post_order(node.rightChild);
		console.log(node.data);
	}

	public size() {
		return this.pr_size(this.root);
	}

	private pr_height(node) {
		if (!node) return 0;
		const left = this.pr_height(node.leftChild);
		const right = this.pr_height(node.rightChild);
		if (left >= right) {
			return left + 1;
		}
		return right + 1;
	}

	public height() {
		return this.pr_height(this.root);
	}

	private pr_find_node(node, data) {
		if (!node) {
			return false;
		}
		if (node.data === data) {
			return node;
		}
		const left = this.pr_find_node(node.leftChild, data);
		if (left) {
			return left;
		}
		return this.pr_find_node(node.rightChild, data);
	}

	public find_node(data) {
		return this.pr_find_node(this.root, data);
	}
}

// const str = 'A(B(D,E(G,))C(,F))#';
// const tree = new Tree();
// tree.init_tree(str);
// tree.in_order();
// console.log(tree.height());
export default Tree;
