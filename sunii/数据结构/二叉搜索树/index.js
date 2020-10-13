let TreeNoe = function(data){
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    this.parent = null;
}

function BinarySearchTree(){
    let root = null;
    // 思路： 往二叉树中插入数据，如果这个数据大于父节点数据，就成为右节点，同时判断右节点是否有值，如果有值，则递归传入右节点，如果无，则将赋值右节点
    // 如果小于，则为左节点，处理同右节点，如果等于，则返回false
    let insert_data = function(node, data){
        if(root == null){
            root = new TreeNoe(data);
            return true;
        }
        if(data < node.data){
            if(node.leftChild){
                return insert_data(node.leftChild, data);
            }else{
                let new_node = new TreeNode(data);
                node.leftChild = new_node;
                new_node.parent = node;
                return true;
            }
        }else if(data > node.rightChild){
            if(node.rightChild){
                return insert_data(node.rightChild, data);
            }else{
                let new_node = new TreeNoe(data);
                node.rightChild = new_node;
                new_node.parent = node;
                return true;
            }
        }else{
            return false;  // 如果相等就返回false，因为不允许有相同的关键码
        }
    }
    this.insert = function(data){
        return insert_data(root, data);
    };
    // 搜索思路： 先与当前值比较，不是则判断是左节点还是右节点，然后递归传入子节点的值
    let search_data = function(node, data){ // 搜索
        if(node == null){
            return null;
        }
        if(data == node.data){
            return node;
        }else if(data < node.data){
            return this.search_data(node.leftChild, data);
        }else{
            return this.search_data(node.rightChild, data);
        }
    }
    this.search_data = function(node, data){
        return search_data(root, data);
    }
    // 删除思路：
    var link_parent = function(parent, node, next_node){
        if(parent == null){ // 判断是否是根节点
            root = next_node;
            root.parent = null;
        }else{
            if(parent.leftChild && parent.leftChild.data == node.data){
                parent.leftChild = next_node;
                next_node.parent = parent;
            }else{
                parent.rightChild = next_node;
                next_node.parent = parent;
            }
        }
    }
    let remove_data = function(node, data){
        if(node == null){
            return false;
        }
        if(data<node.data){
            return remove_data(node.leftChild, data);
        }else if(data > node.data){
            return remove_data(node.rightChild, data);
        }else{
            if(node.leftChild && node.rightChild){
                var temp = node.rightChild;
                while(temp.leftChild){
                    temp = temp.leftChild;
                }
                node.data = temp.data;
                return remove_data(node.rightChild, temp.data);
            }else{
                var parent = node.parent;
                if(!node.leftChild){
                    link_parent(parent, node, node.rightChild);
                }else{
                    link_parent(parent, node, node.leftChild);
                }
                return true;
            }
        }
    }
    this.remove = function(data){
        return remove_data(root, data);
    }

}

