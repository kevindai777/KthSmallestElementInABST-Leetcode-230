//Objective is to find the Kth smallest element in a BST.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(3)
tree.addLeftNode(tree.root, 1)
tree.addRightNode(tree.root.left, 2)
tree.addRightNode(tree.root, 4)

k = 1


//O(n) solution that does an inorder traversal of the tree and returns the kth element.
let arr = []

function dfs(node) {
    if (!node) {
        return
    }

    dfs(node.left)
    arr.push(node.val)
    dfs(node.right)
}
dfs(tree.root)

return arr[k - 1]