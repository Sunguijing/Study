// 栈特点 :  先进后出 数组存储 压栈push  取栈顶pop  查看栈顶item.length -1
class Stack {
	private items: any[] = [];
	//压
	public push(item: any) {
		this.items.push(item);
	}

	//查看
	public top() {
		return this.items[this.items.length - 1];
	}

	// 取
	public pop() {
		return this.items.pop();
	}

	//清空
	public clear() {
		this.items = [];
	}

	// 个数
	public size() {
		return this.items.length;
	}

	// 空
	public isEmpty() {
		return this.items.length === 0;
	}

	public findAll() {
		return this.items;
	}
}
// import Stack from 'Stack';
function is_matching(str: string) {
	const stack = new Stack();
	for (let i = 0; i < str.length; i++) {}
}
is_matching('sdf(ds(ew(we)rw) rwqq) qwewe');
export default Stack;
