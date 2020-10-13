// 双向链表

class DoubleNode {
	public data;
	public next = null;
	public pre = null;
	constructor(data) {
		this.data = data;
	}
}

class DoubleLinkList {
	public length = 0;
	public head = null;
	public tail = null;
	private isRange(index) {
		return index >= 0 && index < this.length;
	}
	//添加元素
	public append(data) {
		const node = new DoubleNode(data);
		if (this.isEmpty()) {
			this.head = node;
		} else {
			const tail = this.tail;
			tail.next = node;
			node.pre = tail;
		}
		this.tail = node;
		this.length += 1;
		return node;
	}
	// 添加指定位置节点
	public insert(data, index) {
		if (!this.isRange(index)) {
			return false;
		}
		if (index === this.length - 1) {
			return this.append(data);
		}
		const node = new DoubleNode(data);
		const head = this.head;

		if (index === 0) {
			this.head = node;
			node.next = head;
			head.pre = node;
		} else {
			let curNode = head.next;
			// let nextNode = curNode.next;
			let i = 1;
			// 这个while 只是为了找到插入点的node
			while (i !== index) {
				curNode = curNode.next;
				i += 1;
			}
			node.pre = curNode.pre;
			curNode.pre = node;
			node.next = curNode;
		}
		this.length += 1;
		return node;
	}

	// 删除指定节点
	public remove(index) {
		if (!this.isRange(index)) {
			return null;
		}
		let head = this.head;
		let delNode;
		if (index === 0) {
			delNode = head;
			const nextNode = delNode.next;
			nextNode.pre = null;
			this.head = nextNode;
		} else if (this.length === index + 1) {
			delNode = this.tail;
			const preNode = delNode.pre;
			preNode.next = null;
			this.tail = preNode;
		} else {
			let curNode = head.next;
			let i = 1;
			while (i !== index) {
				curNode = curNode.next;
				i++;
			}
			const preNode = curNode.pre;
			const nextNode = curNode.next;
			preNode.next = nextNode;
			nextNode.pre = preNode;
			delNode = curNode;
		}
		this.length -= 1;
		return delNode;
	}

	//空
	public isEmpty() {
		return this.length === 0;
	}
}
const doubleLinks = new DoubleLinkList();
doubleLinks.append(1);
doubleLinks.append(2);
doubleLinks.append(3);
doubleLinks.append(4);
console.log(doubleLinks.remove(3));
console.log(doubleLinks.tail);
// console.log(doubleLinks.tail);
// console.log(doubleLinks.insert(3, 2));
// console.log(doubleLinks.tail);
export default DoubleLinkList;
