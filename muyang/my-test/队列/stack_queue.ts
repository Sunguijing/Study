import Stack from '../栈/Stack';

class StackQueue {
	private stack1 = new Stack();
	private stack2 = new Stack();
	public push(item) {
		if (!this.stack2.isEmpty()) {
			this.stack2.push(item);
		} else {
			this.stack1.push(item);
		}
	}
	public pop() {
		if (this.stack1.isEmpty()) {
			while (this.stack2.size() > 1) {
				this.stack1.push(this.stack2.pop());
			}
			return this.stack2.pop();
		}
		while (this.stack1.size() > 1) {
			this.stack2.push(this.stack1.pop());
		}
		return this.stack1.pop();
	}
	public top() {}
}

const queue = new StackQueue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.pop());
