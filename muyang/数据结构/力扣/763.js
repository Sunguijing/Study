// 字符串 S 由小写字母组成。 我们要把这个字符串划分为尽可能多的片段， 同一个字母只会出现在其中的一个片段。 返回一个表示每个字符串片段的长度的列表。



// var partitionLabels = function (s) {
//   const res = [];

//   function recursion(str) {
//     if (str.length === 0) {
//       return;
//     }
//     let cur_str = str;
//     let cur_index = 0;
//     let last_index = -1;
//     while (cur_index !== last_index) {
//       let last_i = cur_str.lastIndexOf(str[cur_index]);
//       // 首字母只出现一次
//       if (last_i === cur_index && last_index === -1) {
//         last_index = cur_index;
//         break;
//       }
//       if (last_i === cur_index && last_index >= last_i) {
//         cur_index += 1;
//         continue;
//       }
//       if (last_index < last_i) {
//         last_index = last_i;
//       }
//       cur_index += 1;
//     }
//     res.push(last_index + 1);
//     recursion(str.substring(last_index + 1))
//   }
//   recursion(s);
//   return res;
// };
// partitionLabels('a')
var partitionLabels = function (S) {
  const last = new Array(26);
  const length = S.length;
  const codePointA = 'a'.codePointAt(0);
  for (let i = 0; i < length; i++) {
    last[S.codePointAt(i) - codePointA] = i;
  }
  const partition = [];
  let start = 0,
    end = 0;
  for (let i = 0; i < length; i++) {
    end = Math.max(end, last[S.codePointAt(i) - codePointA]);
    if (i == end) {
      partition.push(end - start + 1);
      start = end + 1;
    }
  }
  return partition;
};

partitionLabels("ababcbacadefegdehijhklij");