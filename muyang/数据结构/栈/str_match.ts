import StacK from './Stack';
// 字符串是否完全匹配
function strMatch(str: string): boolean {
	const stack = new StacK();
	let item;
	for (let i = 0; i < str.length; i++) {
		item = str[i];
		if (item === '(') {
			stack.push(item);
		} else if (item === ')') {
			if (stack.isEmpty()) {
				return false;
			}
			stack.pop();
		}
	}
	return stack.isEmpty();
}

const str: string = '(1dasdda()dasdasd(a)s)';
console.log(strMatch(str));

const str1: string = ')';
console.log(strMatch(str1));
