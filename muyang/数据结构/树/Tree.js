"use strict";
exports.__esModule = true;
// 广义表创建二叉树
// A(B(D,E(G,))C(,F))#
var Stack_1 = require("../\u6808/Stack");
var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.data = data;
    }
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = null;
    }
    Tree.prototype.init_tree = function (str) {
        var item;
        var k = 1;
        var stack = new Stack_1["default"]();
        var new_node = null;
        for (var i = 0; i < str.length; i++) {
            item = str[i];
            if (item === '#') {
                break;
            }
            if (item === '(') {
                stack.push(new_node);
                k = 1;
            }
            else if (item === ')') {
                stack.pop();
            }
            else if (item === ',') {
                k = 2;
            }
            else {
                new_node = new TreeNode(item);
                if (this.root === null) {
                    this.root = new_node;
                    continue;
                }
                var parent_node = stack.top();
                if (k === 1) {
                    parent_node.leftChild = new_node;
                }
                else if (k === 2) {
                    parent_node.rightChild = new_node;
                }
                new_node.parentNode = parent_node;
            }
        }
        return this.root;
    };
    Tree.prototype.pr_in_order = function (node) {
        if (!node)
            return;
        this.pr_in_order(node.leftChild);
        console.log(node.data);
        this.pr_in_order(node.rightChild);
    };
    Tree.prototype.pr_pre_order = function (node) {
        if (!node)
            return;
        console.log(node.data);
        this.pr_in_order(node.leftChild);
        this.pr_in_order(node.rightChild);
    };
    Tree.prototype.pr_size = function (node) {
        if (!node)
            return 0;
        var left = this.pr_size(node.leftChild);
        var right = this.pr_size(node.rightChild);
        return left + right + 1;
    };
    Tree.prototype.in_order = function () {
        // 中序遍历
        this.pr_in_order(this.root);
    };
    Tree.prototype.pre_order = function () {
        //前序遍历
        this.pr_pre_order(this.root);
    };
    Tree.prototype.post_order = function (node) {
        if (node == null) {
            return;
        }
        this.post_order(node.leftChild);
        this.post_order(node.rightChild);
        console.log(node.data);
    };
    Tree.prototype.size = function () {
        return this.pr_size(this.root);
    };
    Tree.prototype.pr_height = function (node) {
        if (!node)
            return 0;
        var left = this.pr_height(node.leftChild);
        var right = this.pr_height(node.rightChild);
        if (left >= right) {
            return left + 1;
        }
        return right + 1;
    };
    Tree.prototype.height = function () {
        return this.pr_height(this.root);
    };
    Tree.prototype.pr_find_node = function (node, data) {
        if (!node) {
            return false;
        }
        if (node.data === data) {
            return node;
        }
        var left = this.pr_find_node(node.leftChild, data);
        if (left) {
            return left;
        }
        return this.pr_find_node(node.rightChild, data);
    };
    Tree.prototype.find_node = function (data) {
        return this.pr_find_node(this.root, data);
    };
    return Tree;
}());
// const str = 'A(B(D,E(G,))C(,F))#';
// const tree = new Tree();
// tree.init_tree(str);
// tree.in_order();
// console.log(tree.height());
exports["default"] = Tree;
