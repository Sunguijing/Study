// 大量数据时 用二进制位来存数据 32

class BitMap {
	//最大容量
	private capacity;
	//32个数为一组 位运算用
	private size = 32;
	// bit 数据 正数
	private bit_data = [];
	// bit 负数
	private negative_bit_data = [];
	constructor(capacity) {
		this.capacity = capacity;
		// 32存储
		this.init_bit();
	}
	//初始化bit
	private init_bit() {
		const capacity = this.capacity;
		const arr = Array.from({ length: capacity }, () => 0);
		this.bit_data = arr;
	}
	//获取指定点
	private get_dot(num) {
		const re_num = Math.abs(num);
		// 超出承受范围
		if (re_num > this.size * this.capacity) {
			return { isError: true };
		}
		const bitDataIndex = re_num >> 5; // bit_data中第几个数
		const bitIndex = re_num & 0x1f; // 0x1f代表31 因为从 0 开始 // bitIndex 索引
		return { bitDataIndex, bitIndex };
	}
	// 拆开两个地方用
	private re_is_exist(bitDataIndex, bitIndex, isError, num) {
		if (isError) {
			console.log('==========查询失败,超过最大范围===========');
			return false;
		}
		let curNum = num < 0 ? this.negative_bit_data[bitDataIndex] : this.bit_data[bitDataIndex];
		return !!(curNum & (1 << bitIndex));
	}
	// 添加bit
	public add(num) {
		const { bitDataIndex, bitIndex, isError } = this.get_dot(num);
		if (isError) {
			console.log('==========添加失败,超过最大范围===========');
			return null;
		}
		if (num < 0) {
			this.negative_bit_data[bitDataIndex] |= 1 << bitIndex;
		} else {
			this.bit_data[bitDataIndex] |= 1 << bitIndex;
		}
	}
	//判断某个数存不存在
	public is_exist(num) {
		const { bitDataIndex, bitIndex, isError } = this.get_dot(num);
		return this.re_is_exist(bitDataIndex, bitIndex, isError, num);
	}
	// 清除
	public clear(num) {
		const { bitDataIndex, bitIndex, isError } = this.get_dot(num);
		const flag = this.re_is_exist(bitDataIndex, bitIndex, isError, num);
		if (!flag) {
			return new Error('清除节点不存在');
		}
		//将1左移position后，那个位置自然就是1，然后对取反，再与当前值做&，即可清除当前的位置了

		if (num < 0) {
			this.negative_bit_data[bitDataIndex] &= ~(1 << bitIndex);
		} else {
			this.bit_data[bitDataIndex] &= ~(1 << bitIndex);
		}
		return true;
	}
}

const bitMap = new BitMap(100);
bitMap.add(0);
bitMap.add(1);
bitMap.add(2);
bitMap.add(-1);
bitMap.add(-2);
console.log(bitMap.is_exist(0));
console.log(bitMap.is_exist(-1));
console.log(bitMap.clear(0));
console.log(bitMap.is_exist(0));
console.log(bitMap.clear(-1));
console.log(bitMap.is_exist(-1));
export default BitMap;
