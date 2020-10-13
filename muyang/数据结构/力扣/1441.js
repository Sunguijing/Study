var buildArray = function (target, n) {
  const source = Array.from({ length: n }, (_, index) => index + 1);
  let source_item = source.shift();
  let target_item = target.shift();
  const res = [];
  while (target_item) {
    if (source_item === target_item) {
      res.push('Push');
      if (target.length) {
        source_item = source.shift();
      }
      target_item = target.shift();
    } else {
      flag = true;
      res.push('Push', 'Pop');
      if (target.length) {
        source_item = source.shift();
      }
    }
  }


  return res;
};
console.log(buildArray([1, 2], 4))