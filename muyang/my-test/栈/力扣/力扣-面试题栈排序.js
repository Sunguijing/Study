var SortedStack = function () {
  this.items = [];
  this.minItems = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function (item) {
  if (this.isEmpty()) {
    this.minItems.push(item);
  } else {
    while (!this.isEmpty()) { // 1 > 2
      var minVal = this.peek(); //  6
      if (minVal > item) {
        this.items.push(item);
        break;
      } else {
        this.items.push(minVal);
        this.pop()
      }
    }
    if (this.minItems.length === 0) {
      this.minItems.push(item);
    }
    while (this.items.length != 0) {
      this.minItems.push(this.items.pop());
    }
    console.log(this.minItems);
  }
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
  this.minItems.pop();
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.minItems[this.minItems.length - 1];
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
  return this.minItems.length === 0;
};



var obj = new SortedStack()
obj.push(1)
obj.push(6)
obj.push(5)