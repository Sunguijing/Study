import LinkList from './LinkList';
import Stack from './Stack';

function getData(num, start) {
	var link = new LinkList();
	for (var i = start; i < num + start; i++) {
		link.append(i);
	}
	return link;
}
var linkNodes = getData(10, 1);
// 查找单链表中的倒数第k个节点 (k>0)    //老师思路 设置两个step  一个先走 传入的k 步  然后两个再一起走 第一个到头的时候第二个对应的就是倒数了
// 根据封装的LinkList类
function reverseFind1(links, index) {
	if (index > links.length || index < 1) {
		return null;
	}
	const re_index = links.length - index;
	return links.getNode(re_index);
}

// console.log(reverseFind1(linkNodes, 4));

// 栈
function reverseFind2(startNode, index) {
	let curNode = startNode;
	const stack = new Stack(); // 存储链表每一个数据 也可以用数组存最后 arr[arr.length - index]
	while (curNode) {
		stack.push(curNode);
		curNode = curNode.next;
	}
	let i = 0;
	while (index > i) {
		stack.pop();
		i += 1;
	}
	return stack.pop();
}
// console.log(reverseFind2(linkNodes.head, 4));
// 查找单链表的中间节点  //老师思路 设置两个step  两个一起走  一个走两步一个走一步 注意while 条件是 node.next
function find_middle1(links) {
	const re_index = Math.floor(links.length / 2);
	return links.getNode(re_index);
}

console.log(find_middle1(linkNodes));

function find_middle2(startNode) {
	let curNode = startNode;
	const stack = new Stack(); // 存储链表每一个数据 也可以用数组存最后 arr[arr.length/2]
	let length = 0;
	while (curNode) {
		length += 1;
		stack.push(curNode);
		curNode = curNode.next;
	}
	let i = 0;
	const index = Math.floor(length / 2);
	while (index > i) {
		stack.pop();
		i += 1;
	}
	return stack.pop();
}

console.log(find_middle2(linkNodes.head));
