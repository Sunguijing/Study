import LinkList from './LinkList';

class Queue {
	private link = new LinkList();

	public push(data) {
		this.link.append(data);
	}

	public top() {
		return this.link.getNode(1).data;
	}

	public pop() {
		return this.link.remove(1).data;
	}
	public size() {
		return this.link.length;
	}
	public isEmpty() {
		return this.link.isEmpty();
	}
}

const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.top());
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.pop());
console.log(queue.top());
console.log(queue.size());
console.log(queue.pop());
