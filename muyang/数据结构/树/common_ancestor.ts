import Tree from './Tree';

const tree = new Tree();
tree.init_tree('A(B(D,E(G,H)),C(,F))#');
var root_node = tree.root;

var node1 = tree.find_node('D');
var node2 = tree.find_node('G');

// 寻找最近公共祖先
var lowest_common_ancestor = function(root_node, node1, node2) {
	// 实现你的算法
	let node_1 = node1;
	let node_2 = node2;
	const parent_nodes1 = [];
	const parent_nodes2 = [];
	while (node_1 && node_1.data !== root_node.data) {
		node_1 = node_1.parentNode;
		parent_nodes1.push(node_1);
	}
	while (node_2 && node_2.data !== root_node.data) {
		node_2 = node_2.parentNode;
		parent_nodes2.push(node_2);
	}
	let max_l = parent_nodes1.length + parent_nodes2.length - 2;
	let parent = root_node;
	for (let i = 0; i < parent_nodes1.length; i++) {
		for (let j = 0; j < parent_nodes2.length; j++) {
			if (parent_nodes1[i].data === parent_nodes2[j].data) {
				if (max_l > i + j) {
					max_l = i + j;
					parent = parent_nodes1[i];
				}
			}
		}
	}
	return parent;
};

var ancestor = lowest_common_ancestor(root_node, node1, node2);
console.log(ancestor.data);

function lowest_common_ancestor1(root_node, node1, node2) {
	if (!root_node) {
		return null;
	}
	if (root_node.data === node1.data || root_node.data === node2.data) {
		return root_node;
	}
	const left = lowest_common_ancestor1(root_node.leftChild, node1, node2);
	const right = lowest_common_ancestor1(root_node.rightChild, node1, node2);
	if (left && right) {
		return root_node;
	}
	if (left) {
		return left;
	}
	return right;
}

var ancestor1 = lowest_common_ancestor1(root_node, node1, node2);
console.log(ancestor1.data);
