import LinkList from './LinkList';

class Stack {
	private link = new LinkList();
	public push(data) {
		this.link.append(data);
	}
	public top() {
		return this.link.getNode(this.size()).data;
	}
	public pop() {
		return this.link.remove(this.size()).data;
	}
	public isEmpty() {
		return this.link.isEmpty();
	}
	public size() {
		return this.link.length;
	}
}

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// console.log(stack.top());
// console.log(stack.size());
// console.log(stack.isEmpty());
// console.log(stack.pop());
// console.log(stack.top());
// console.log(stack.size());
// console.log(stack.pop());

export default Stack;
