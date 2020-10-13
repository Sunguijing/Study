// 合并两个有序链表 （小->大）
import LinkList from './LinkList';

function getData(num, start) {
	var link = new LinkList();
	for (var i = start; i < num + start; i++) {
		link.append(i);
	}
	return link;
}

const linkNodes1 = getData(5, 20);
const linkNodes2 = getData(10, 20);

// 通过搭建的LinkList类
function merge_link1(links1, links2) {
	var link = new LinkList();
	let length1 = links1.length;
	let length2 = links2.length;
	let curI1 = 1;
	let curI2 = 1;
	let curItem1, curItem2;
	while (length1 !== curI1 && length2 !== curI2) {
		curItem1 = links1.getNode(curI1);
		curItem2 = links2.getNode(curI2);
		if (curItem1.data >= curItem2.data) {
			link.append(curItem2.data);
			curI2 += 1;
		} else {
			link.append(curItem1.data);
			curI1 += 1;
		}
	}
	if (length1 + length2 === link.length) {
		link.print();
		return true;
	}
	if (length1 !== curI1) {
		while (length1 !== curI1) {
			curI1 += 1;
			curItem1 = links1.getNode(curI1);
			link.append(curItem1.data);
		}
	}
	if (length2 !== curI2) {
		while (length2 !== curI2) {
			curI2 += 1;
			curItem2 = links2.getNode(curI2);
			link.append(curItem2.data);
		}
	}
	link.print();
}

merge_link1(linkNodes1, linkNodes2);
