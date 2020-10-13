/**
 * 约瑟夫环
 * 有一个数组 [0-100] 要求每隔两个数删掉一个数，到末尾时循环至开头继续进行,求最后一个被删掉的数
 */
import Queue from './Queue';

function qusef(num) {
	const queue = new Queue();
	for (let i = 0; i < num; i++) {
		queue.push(i);
	}
	let index = 0;
	let item;
	while (queue.size() > 2) {
		index += 1;
		item = queue.shift();
		if (index % 3) {
			queue.push(item);
		}
	}
	return queue.top();
}
console.log(qusef(100));
