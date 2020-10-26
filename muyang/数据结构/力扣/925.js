// 你的朋友正在使用键盘输入他的名字 name。 偶尔， 在键入字符 c 时， 按键可能会被长按， 而字符可能被输入 1 次或多次。

// 你将会检查键盘输入的字符 typed。 如果它对应的可能是你的朋友的名字（ 其中一些字符可能被长按）， 那么就返回 True。


var isLongPressedName = function (name, typed) {
  let target = name;
  let input = typed;
  let target_index = 0;
  let input_index = 0;
  while (target.length >= target_index) {
    const cur_input = input[input_index];
    const cur_target = target[target_index];
    if (cur_input === cur_target) {
      target_index += 1;
      input_index += 1;
      continue;
    }
    if (target_index !== 0 && cur_input === target[target_index - 1]) {
      input_index += 1;
      continue;
    }
    return false;
  }
  return true;
};
const name = "alex",
  typed = "aaleex"
console.log(isLongPressedName(name, typed))