//------------------------------------------------------------------------------------
// class Node
function Node (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;

    this.show = show;
}

function show () {
    return this.data;
}

// traversal (ascending, descending)
function inOrder (node) {
    if (node !== null) {
        inOrder(node.left);
        console.log('' + node.show());
        inOrder(node.right);
    }
}

function preOrder (node) {
    if (node !== null) {
        console.log('' + node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder (node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log('' + node.show());
    }
}

//------------------------------------------------------------------------------------
// class BST(Binary Search Tree)
function BST () {
    this.root = null;

    this.insert = insert;
    this.remove = remove;

    // traversal (ascending, descending)
    //this.inOrder = inOrder;
    //this.preOrder = preOrder;
    //this.postOrder = postOrder;

    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;

}

function insert (data) {
    var n = new Node(data, null, null);

    if (this.root === null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;

        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function remove (data) {
    removeNode(this.root, data);
}

function removeNode (node, data) {
    if (node === null) {
        return null;
    }

    if (data === node.data) {
        if (node.left === null && node.right === null) {
            return null;
        }

        if (node.left === null) {
            //
        }

        if (node.right === null) {
            //
        }


    } else if (data < node.data) {

    } else {

    }
}

function getMin () {
    var current = this.root;

    while (current.left !== null) {
        current = current.left;
    }

    return current.data;
}

function getMax () {
    var current = this.root;

    while (current.right !== null) {
        current = current.right;
    }

    return current.data;
}

function find (data) {
    var current = this.root;

    while (current.data !== data) {
        if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }

        if (current === null) {
            break;
        }
    }

    return current;
}


//------------------------------------------------------------------------------------
// Test
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

console.log('Inorder traversal: ');
inOrder(nums.root);

console.log('Preorder traversal: ');
preOrder(nums.root);

console.log('Postorder traversal: ');
postOrder(nums.root);

console.log('The minimum of the BST is ' + nums.getMin());
console.log('The maximum of the BST is ' + nums.getMax());

value = 7;
console.log(value + ' was ' + (nums.find(value) !== null ? 'found' : 'not found'));