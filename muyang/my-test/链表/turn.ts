import LinkList from './LinkList';
import Stack from './Stack';

function getData(num) {
	const link = new LinkList();
	for (let i = 0; i < num; i++) {
		link.append(i);
	}
	return link;
}

const linkData = getData(10);

// 迭代翻转
function turn(linkData) {
	if (linkData.isEmpty()) {
		return null;
	}
	let curNode = linkData.head;
	let preNode = null;
	let nextNode = null;
	// a => b =>c
	// c => b => a
	while (curNode) {
		nextNode = curNode.next;
		curNode.next = preNode;
		preNode = curNode;
		curNode = nextNode;
	}
	console.log(preNode);
}

// turn(linkData);

// 栈
function turn1(linkData) {
	let curNode, preNode;
	for (var i = linkData.length; i > 0; i--) {
		curNode = linkData.getNode(i);
		if (i === 1) {
			curNode.next = null;
		} else {
			preNode = linkData.getNode(i - 1);
			curNode.next = preNode;
		}
	}
	console.log(preNode);
}

// turn1(linkData);

// 栈
function turnStack(linkData) {
	const stack = new Stack();
	let curNode = linkData.head;
	while (curNode) {
		stack.push(curNode);
		curNode = curNode.next;
	}

	let item, topItem;
	while (!stack.isEmpty()) {
		item = stack.pop();
		topItem = stack.top();
		item.next = topItem;
	}
	console.log(item);
}

turnStack(linkData);
