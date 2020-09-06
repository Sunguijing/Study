/** 
 * 两个队列实现一个栈
*/
import Queue from './Queue';

class QueueStack {
	private queue1 = new Queue();
	private queue2 = new Queue();
	private data = null;
	private save_data = null;

	private init_queue() {
		if (!this.queue2.isEmpty()) {
			this.data = this.queue2;
			this.save_data = this.queue1;
		} else {
			this.data = this.queue1;
			this.save_data = this.queue2;
		}
	}

	public push(item) {
		this.init_queue();
		this.data.push(item);
	}

	public pop() {
		this.init_queue();
		while (this.data.size() > 1) {
			this.save_data.push(this.data.shift());
		}
		return this.data.shift();
	}

	public top() {
		this.init_queue();
		while (this.data.size() > 1) {
			this.save_data.push(this.data.shift());
		}
		this.save_data.push(this.data.top());
		return this.data.shift();
	}
}

const stack = new QueueStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack.top());
stack.push(5);
console.log(stack.top());
