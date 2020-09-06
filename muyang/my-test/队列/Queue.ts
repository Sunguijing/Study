// 先进先出 一头进一头出
class Queue {
	private items = [];
	public push(item) {
		this.items.push(item);
	}
	public shift() {
		return this.items.shift();
	}
	public top() {
		return this.items[0];
	}
	public clear() {
		this.items = [];
	}
	public size() {
		return this.items.length;
	}
	public isEmpty() {
		return this.size() === 0;
	}
}

export default Queue;
