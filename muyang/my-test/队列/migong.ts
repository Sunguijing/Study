import Queue from './Queue';

var maze_array = [
	[ 0, 0, 1, 0, 0, 0, 0 ],
	[ 0, 0, 1, 1, 0, 0, 0 ],
	[ 0, 0, 0, 0, 1, 0, 0 ],
	[ 0, 0, 0, 1, 1, 0, 0 ],
	[ 1, 0, 0, 0, 1, 0, 0 ],
	[ 1, 1, 1, 0, 0, 0, 0 ],
	[ 1, 1, 1, 0, 0, 0, 0 ],
	[ 1, 1, 1, 0, 0, 0, 0 ],
	[ 1, 1, 1, 0, 0, 0, 0 ],
	[ 1, 1, 1, 0, 0, 0, 0 ]
];

var byWalks = []; // 存已经走过的节点

var direction = [
	[ 0, -1 ],
	[ 0, 1 ],
	[ -1, 0 ],
	[ 1, 0 ] // 上 下 左 右
];

function isCrossBorder(x, y) {
	const borderX = maze_array[0].length;
	const borderY = maze_array.length;
	return borderX < x || borderY < y || y - 1 < 0 || x - 1 < 0;
}

function isObstacle(x, y) {
	return !!maze_array[y - 1][x - 1];
}
// 队列实现
function migong(y, x) {
	if (isCrossBorder(x, y)) return;
	const queue = new Queue();
	let step1;
	queue.push([ 1, 1, 0 ]); //  y,x,step
	while (!queue.isEmpty()) {
		let [ y1, x1, step ] = queue.shift();
		if (y1 === y && x1 === x) {
			step1 = step;
			break;
		}
		if (!isCrossBorder(x1, y1) && !isObstacle(x1, y1)) {
			step += 1;
			direction.forEach((item) => {
				let [ directionx, directiony ] = item;
				let nextX = x1 + directionx;
				let nextY = y1 + directiony;
				if (!(byWalks[nextY] && byWalks[nextY][nextX])) {
					if (!byWalks[nextY]) {
						byWalks[nextY] = [];
					}
					byWalks[nextY][nextX] = true;
					queue.push([ nextY, nextX, step ]);
				}
			});
		}
	}
	console.log(step1);
}

migong(9, 3);
