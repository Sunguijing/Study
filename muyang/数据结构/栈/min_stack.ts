// 如何实现带有min方法的栈
// class MinStack {
// 	private items: any[] = [];
// 	private minItems: any[] = [];
// 	public push(item: any) {
// 		if (this.isEmpty()) {
// 			this.minItems.push(item);
// 		} else {
// 			const minVal = this.min();
// 			if (minVal > item) {
// 				this.minItems.push(item);
// 			} else {
// 				this.minItems.push(minVal);
// 			}
// 		}
// 		this.items.push(item);
// 	}
// 	public min() {
// 		return this.minItems[this.minItems.length - 1];
// 	}
// 	public pop() {
// 		this.minItems.pop();
// 		return this.items.pop();
// 	}
// 	public top() {
// 		return this.items[this.items.length - 1];
// 	}

// 	public size() {
// 		return this.items.length;
// 	}

// 	public isEmpty() {
// 		return this.size() === 0;
// 	}

// 	public clear() {
// 		this.items = [];
// 		this.minItems = [];
// 	}
// }

class MinStack {
	private min_stack = [];
	private stack = [];
	public push(item) {
		if (this.is_empty()) {
			this.min_stack.push(item);
		} else {
			const minNode = this.min_stack[this.min_stack.length - 1];
			if (minNode > item) {
				this.min_stack.push(item);
			} else {
				this.min_stack.push(minNode);
			}
		}
		this.stack.push(item);
	}
	public min() {
		return this.min_stack[this.min_stack.length - 1];
	}
	public pop() {
		this.min_stack.pop();
		return this.stack.pop();
	}
	public size() {
		return this.stack.length;
	}
	public is_empty() {
		return this.size() === 0;
	}
}
const minstack = new MinStack();
minstack.push(3);
minstack.push(6);
minstack.push(8);
console.log(minstack.min());
minstack.push(2);
console.log(minstack.min());
console.log(minstack.pop());
console.log(minstack.min());

export default MinStack;
