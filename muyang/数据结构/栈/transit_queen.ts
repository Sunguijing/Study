// 中缀表达式 -> 后缀表达式
import Stack from './Stack';
import suffix from './suffix';
const symbols: Array<string> = [ '+', '-', '*', '/' ];

function isSymbol(symbol: string): boolean {
	return symbols.includes(symbol);
}

enum SymbolEnum {
	'+' = 1,
	'-' = 1,
	'*' = 2,
	'/' = 2
}
function tansit_queen(arr: any[]): any[] {
	const stack = new Stack();
	const result: any[] = [];
	let item;
	for (let i = 0; i < arr.length; i++) {
		item = arr[i];
		if (item === '(') {
			stack.push(item);
		} else if (item === ')') {
			let top;
			while (((top = stack.pop()), top !== '(')) {
				result.push(top);
			}
		} else if (isSymbol(item)) {
			if (!stack.isEmpty() && SymbolEnum[stack.top()] > SymbolEnum[item]) {
				result.push(stack.pop());
			}
			stack.push(item);
		} else {
			result.push(item);
		}
	}
	while (stack.size() > 0) {
		result.push(stack.pop());
	}
	return result;
}
// 12 + 10 / 5 + 6
var exp = [
	'(',
	'1',
	'+',
	'(',
	'4',
	'+',
	'5',
	'+',
	'3',
	')',
	'/',
	'4',
	'-',
	'3',
	')',
	'+',
	'(',
	'(',
	'6',
	'+',
	'8',
	')',
	'*',
	'3',
	')'
];
const arr = tansit_queen(exp);
console.log(suffix(arr));
