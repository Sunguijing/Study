// 这里leetcode中是队列的练习题，933 最近的请求次数
// 思路： 这道题难点我觉得主要是在对题目的理解，题目的意思是，返回3000ms以内的所有pine值，也就是说，从现在到未来3秒内
//        所有的ping值，超过3秒的ping值删除，永远只留当前3s的ping值，故将ping值加入队列，队列的特征是先进先出，先进来
//        的ping值过了3秒自动移除，最后返回当前数组的长度
var RecentCounter = function() {
    this.queue = new Array();
};
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);
    while(this.queue[0] < t-3000){
        this.queue.shift();
    }
    return this.queue.length;
};