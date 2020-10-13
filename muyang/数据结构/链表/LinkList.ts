class Node {
	public data;
	public next;
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
class LinkList {
	length = 0;
	head = null;
	tail = null;
	append(data) {
		const new_node = new Node(data);
		if (this.isEmpty()) {
			this.head = new_node;
		} else {
			// const tail = this.tail;
			this.tail.next = new_node;
		}
		this.tail = new_node;
		this.length += 1;
		return true;
	}
	isEmpty() {
		return this.length === 0;
	}
	size() {
		return this.length;
	}
}
const linkList = new LinkList();
linkList.append(1);
// console.log(linkList.indexOf(1));
// linkList.append(3);
// console.log(linkList.indexOf(3));
// linkList.append(4);
// linkList.insert(2, 2);
// console.log(linkList.indexOf(2));
// console.log(linkList.indexOf(3));
// linkList.insert(1, 0);
// console.log(linkList.head);
// console.log(linkList.length);
// console.log(linkList.remove(3));
// console.log(linkList.tail);
// console.log(linkList.head);
// console.log(linkList.head.next);
// console.log(linkList.head.next.next);
// console.log(linkList.getNode(1));
// console.log(linkList.getNode(2));
// console.log(linkList.getNode(3));
// console.log(linkList.getNode(4));

export default LinkList;

// class LinkList {
// 	public head = null; // 头
// 	public tail = null; //尾
// 	public length = 0;
// 	// 添加新元素
// 	public append(data) {
// 		const node = new Node(data);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 		} else {
// 			this.tail.next = node;
// 		}
// 		this.tail = node;
// 		this.length += 1;
// 		return node;
// 	}
// 	//插入元素
// 	public insert(index, data) {
// 		if (index >= this.length) {
// 			return this.append(data);
// 		}
// 		let cNode = this.head;
// 		const node = new Node(data);
// 		if (index === 1) {
// 			node.next = cNode;
// 			this.head = node;
// 		} else {
// 			let i = 1;
// 			while (cNode.next) {
// 				i += 1;
// 				if (i === index) {
// 					const nextNode = cNode.next;
// 					cNode.next = node;
// 					node.next = nextNode;
// 					break;
// 				}
// 				cNode = cNode.next;
// 			}
// 		}
// 		this.length += 1;
// 		return node;
// 	}
// 	//判空
// 	public isEmpty() {
// 		return this.length === 0;
// 	}
// 	//范围
// 	private judgeRange(index) {
// 		return this.length >= index && index >= 0;
// 	}
// 	// 删除指定节点
// 	public remove(index) {
// 		if (!this.judgeRange(index)) {
// 			return null;
// 		}
// 		let cNode = this.head;
// 		let delNode;
// 		if (index === 1) {
// 			this.head = cNode.next;
// 			delNode = cNode;
// 			if (!this.head) {
// 				this.tail = null;
// 			}
// 		} else {
// 			let i = 1;
// 			while (i !== index - 1) {
// 				i += 1;
// 				cNode = cNode.next;
// 			}
// 			delNode = cNode.next;
// 			cNode.next = delNode.next;
// 			if (!delNode.next) {
// 				this.tail = cNode;
// 			}
// 		}
// 		this.length -= 1;
// 		return delNode;
// 	}
// 	// 获取指定node节点
// 	public getNode(index) {
// 		if (!this.judgeRange(index)) {
// 			return null;
// 		}
// 		if (index === 1) {
// 			return this.head;
// 		}
// 		if (index === this.length) {
// 			return this.tail;
// 		}
// 		let i = 1;
// 		let curNode = this.head;
// 		while (index !== i) {
// 			i += 1;
// 			curNode = curNode.next;
// 		}
// 		return curNode;
// 	}
// 	//返回指定元素索引
// 	public indexOf(data) {
// 		let i = 0;
// 		let curI = -1;
// 		let curNode = this.head;
// 		if (this.length === 1 && curNode.data === data) {
// 			curI = i;
// 		} else {
// 			while (curNode) {
// 				if (curNode.data === data) {
// 					curI = i;
// 					break;
// 				}
// 				i += 1;
// 				curNode = curNode.next;
// 			}
// 		}
// 		return curI;
// 	}

// 	//整个链表
// public print() {
// 	let curNode = this.head;
// 	while (curNode) {
// 		console.log(curNode);
// 		curNode = curNode.next;
// 	}
// }
// }
