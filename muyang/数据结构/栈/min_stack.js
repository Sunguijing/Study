var MinStack = /** @class */ (function () {
    function MinStack() {
        this.items = [];
        this.minItems = [];
    }
    MinStack.prototype.push = function (item) {
        if (this.isEmpty()) {
            this.minItems.push(item);
        }
        else {
            var minVal = this.min();
            if (minVal > item) {
                this.minItems.push(item);
            }
            else {
                this.minItems.push(minVal);
            }
        }
        this.items.push(item);
    };
    MinStack.prototype.min = function () {
        return this.minItems[this.minItems.length - 1];
    };
    MinStack.prototype.pop = function () {
        this.minItems.pop();
        return this.items.pop();
    };
    MinStack.prototype.top = function () {
        return this.items[this.items.length - 1];
    };
    MinStack.prototype.size = function () {
        return this.items.length;
    };
    MinStack.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    MinStack.prototype.clear = function () {
        this.items = [];
        this.minItems = [];
    };
    return MinStack;
}());
var minstack = new MinStack();
minstack.push(3);
minstack.push(6);
minstack.push(8);
console.log(minstack.min());
minstack.push(2);
console.log(minstack.min());
console.log(minstack.pop());
console.log(minstack.min());
