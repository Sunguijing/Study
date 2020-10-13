/** 
 * 斐波那契数列
 * f(n) = f(n-1)+ f(n-2)
 * 
*/

import Queue from './Queue';

function feibo(n) {
	const queue = new Queue();
	queue.push(1);
	queue.push(1);
	let index = 0;
	while (index < n - 2) {
		index += 1;
		const one_val = queue.shift();
		const two_val = queue.top();
		const add_val = one_val + two_val;
		queue.push(add_val);
	}
	queue.shift();
	return queue.top();
}

console.log(feibo(10));
