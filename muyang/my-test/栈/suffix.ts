import Stack from './Stack';
//逆波兰  -- 后缀表达式
const symbols: Array<string> = [ '+', '-', '*', '/' ];

function suffix(arr: any[]): number | Error {
	const stack = new Stack();
	let item;
	for (let i = 0; i < arr.length; i++) {
		item = arr[i];
		if (symbols.includes(item)) {
			if (stack.size() < 2) {
				return new Error(`传入数据有误,index为${i}`);
			}
			const value_1: number = stack.pop();
			const value_2: number = stack.pop();
			stack.push(parseInt(eval(`${value_2}${item}${value_1}`)));
		} else {
			stack.push(item);
		}
	}
	if (stack.size() !== 1) {
		return new Error('传入数据有误');
	}
	return stack.pop();
}
// var arr = [ '4', '13', '5', '/', '+' ];

// var arr = [ '10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+' ];
var arr = [ '2', '3', '-', '2', '+' ];
console.log(suffix(arr));
export default suffix;
