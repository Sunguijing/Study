import Tree from './Tree';

// 求一棵树的镜像(左右节点互换)
const str = 'A(B(D,E(G,))C(,F))#';
const tree = new Tree();
tree.init_tree(str);
// 解一
// 先换自己的左右 再换递归子节点
function mirror(node) {
	if (!node) {
		return false;
	}
	const temp = node.leftChild;
	node.leftChild = node.rightChild;
	node.rightChild = temp;
	mirror(node.leftChild);
	mirror(node.rightChild);
}

mirror(tree.root);
console.log(tree.root);
// 解二
// 先递归子节点 再换
function mirror1(node) {
	if (!node) {
		return;
	}
	const left = mirror1(node.leftChild);
	const right = mirror1(node.rightChild);
	node.rightChild = left;
	node.leftChild = right;
	return node;
}
mirror1(tree.root);
console.log(tree.root);
