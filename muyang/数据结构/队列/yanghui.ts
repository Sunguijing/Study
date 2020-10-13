/** 
 * 杨辉三角
 * 1
 * 11
 * 121
 * 1331
 * 14641
*/

import Queue from './Queue';

function yanghui(n) {
	const queue = new Queue();
	queue.push(1);
	queue.push(0);
	for (let i = 0; i < n; i++) {
		let pre = 0;
		let line = '';
		let item;
		while (true) {
			item = queue.shift();
			if (item === 0) {
				queue.push(1);
				queue.push(0);
				break;
			}
			line += ' ' + item;
			let value = item + pre;
			pre = item;
			queue.push(value);
		}
		console.log(line);
	}
}

yanghui(6);

function yanghui2(n) {
	var queue = new Queue();
	queue.push(1);
	for (var i = 1; i < n; i++) {
		var pre = 0;
		var line = '';
		var item = void 0;
		for (var j = 0; j < i; j++) {
			item = queue.shift();
			line += ` ${item}`;
			let value = item + pre;
			pre = item;
			queue.push(value);
		}
		queue.push(1);
		console.log(line);
	}
}

yanghui2(10);
