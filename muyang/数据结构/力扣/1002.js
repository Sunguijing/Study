// 给定仅有小写字母组成的字符串数组 A， 返回列表中的每个字符串中都显示的全部字符（ 包括重复字符） 组成的列表。 例如， 如果一个字符在每个字符串中出现 3 次， 但不是 4 次， 则需要在最终答案中包含该字符 3 次。

// 你可以按任意顺序返回答案。


/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let data_arr = A;
  if (data_arr.length === 0 || data_arr.length === 1) {
    return [];
  }
  while (true) {
    if (data_arr.length === 1) {
      return data_arr[0].split('');
    }
    const cur_str = data_arr.pop();
    const next_str = data_arr.pop();
    let str1, str2;
    if (cur_str.length > next_str.length) {
      str1 = next_str;
      str2 = cur_str;
    } else {
      str1 = cur_str;
      str2 = next_str;
    }
    let add_str = '';
    for (let i = 0; i < str1.length; i++) {
      if (str2.includes(str1[i])) {
        add_str += str1[i];
        str2 = str2.replace(str1[i], '');
      }
    }
    data_arr.push(add_str);
  }
};

console.log(commonChars(["bella", "label", "roller"]));