class BitMap {
	public size: number = 0;
	private bit_arr = [];
	constructor(size = 0) {
		this.size = size;
		// this.init_bit(size);
	}

	private init_bit(size) {
		this.bit_arr = Array.from({ length: size }, () => 0);
	}

	public sort(arr, maxNum) {
		let max_num = maxNum;
		let size = this.size;
		const length = Math.ceil(max_num / size);
		this.init_bit(length);
		for (let i = 0; i < arr.length; i++) {
			this.set_bit(arr[i]);
		}
		for (let i = 0; i < maxNum + 1; i++) {
			if (this.is_exist(i)) {
				console.log(i);
			}
		}
	}

	private set_bit(num) {
		const cur_index = Math.floor(num / this.size);
		const remainder = num % this.size;
		const bitNum = this.bit_arr[cur_index];
		this.bit_arr[cur_index] = bitNum | (1 << remainder);
	}

	private is_exist(num) {
		const cur_index = Math.floor(num / this.size);
		const remainder = num % this.size;
		const bitNum = this.bit_arr[cur_index];
		let value = bitNum & (1 << remainder);
		return value !== 0;
	}
}

const bitMap = new BitMap(10);
const arr = [ 3, 5, 2, 10, 6, 12, 8, 14, 9 ];
bitMap.sort(arr, 14);
// console.log(bitMap);
export default BitMap;
