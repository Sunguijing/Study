/**
 * Created by kwsy on 2018/9/8.
 */

function Stack() {
    var items = [];  // 使用数组存储数据

    // push方法向栈里压入一个元素
    this.push = function(item){
        items.push(item);
    };

    // pop方法把栈顶的元素弹出
    this.pop = function(){
        return items.pop();
    };

    // top 方法返回栈顶元素
    this.top = function(){
        return items[items.length - 1];
    };

    // isEmpty返回栈是否为空
    this.isEmpty = function(){
        return items.length == 0;
    };

    // size方法返回栈的大小
    this.size = function(){
        return items.length;
    };

    // clear 清空栈
    this.clear = function(){
        items = []
    };
}

// exports.Stack = Stack;

function Queue(){
  var items = [];   // 存储数据

  // 向队列尾部添加一个元素
  this.enqueue = function(item){
      items.push(item);
  };

  // 移除队列头部的元素
  this.dequeue = function(){
      return items.shift();
  };

  // 返回队列头部的元素
  this.head = function(){
      return items[0];
  };

  // 返回队列尾部的元素
  this.tail = function(){
      return items[items.length-1];
  };

  // 返回队列大小
  this.size = function(){
      return items.length;
  };

  // clear
  this.clear = function(){
      items = [];
  };

  // isEmpty 判断是否为空队列
  this.isEmpty = function(){
      return items.length == 0;
  };
};