import LinkList from './LinkList';
import Stack from './Stack';
function getData(num) {
	var link = new LinkList();
	for (var i = 0; i < num; i++) {
		link.append(i);
	}
	return link;
}

const linkNodes = getData(10);
//  从尾到头打印链表

//栈  利用栈的特点先进后出 把链表中的数据push进去再pop出来
function reverse_print1(linkNodes) {
	const length = linkNodes.length;
	let curNode = linkNodes.head;
	if (length === 0) {
		return null;
	}
	if (length === 1) {
		console.log(curNode);
		return true;
	}
	if (length === 2) {
		const tailNode = linkNodes.tail;
		console.log(tailNode);
		console.log(curNode);
		return true;
	}
	const stack = new Stack();
	while (curNode) {
		stack.push(curNode);
		curNode = curNode.next;
	}
	while (!stack.isEmpty()) {
		console.log(stack.pop());
	}
	return true;
}

reverse_print1(linkNodes);

//递归
function reverse_print2(node) {
	if (node) {
		reverse_print2(node.next);
		console.log(node);
	} else {
		return;
	}
}

reverse_print2(linkNodes.head);
