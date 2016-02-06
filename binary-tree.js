'use strict';

class BinaryTree {
	constructor() {
        this.root = null;
	}

	insert(data) {
        var currentNode = this.root, parentNode = null;

        while (currentNode != null) {
            parentNode = currentNode;
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        var newNode = new Node(data, null, null);

        if (parentNode == null) {
            this.root = newNode;
        } else {
            if (data < parentNode.data) {
                parentNode.left = newNode;
            } else {
                parentNode.right = newNode;
            }
        }
	}

	contains(data) {
        var currentNode = this.root;

        while (currentNode != null) {
            if (currentNode.data == data) {
                return true;
            }

            if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return false;
	}

	remove(data) {
        var currentNode = this.root, parentNode = null;

        while (currentNode != null) {
            if (data == currentNode.data) {
                break;
            }

            parentNode = currentNode;
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        if (currentNode == null) {
            return;
        } else if (parentNode == null) {
            this.root = null;
        } else if (currentNode.left == null && currentNode.right == null) {
            Utils.changeDirectChildNode(parentNode, data, null);
        } else if (currentNode.left == null || currentNode.right == null) {
            if (currentNode.left == null) {
                Utils.changeDirectChildNode(parentNode, data, currentNode.right);
            } else {
                Utils.changeDirectChildNode(parentNode, data, currentNode.left);
            }
        } else {
            var x = currentNode.right, parentX = currentNode;

            while (x.left != null) {
                parentX = x;
                x = x.left;
            }

            if (parentX != currentNode) {
                parentX.left = x.right;
            } else {
                parentX.right = x.right;
            }

            x.left = currentNode.left;
            x.right = currentNode.right;

            Utils.changeDirectChildNode(parentNode, data, x);
        }
	}

	size() {

	}

	isEmpty() {

	}
}

class Utils {
    static changeDirectChildNode(parentNode, data, changeNode) {
        if (data < parentNode.data) {
            parentNode.left = changeNode;
        } else {
            parentNode.right = changeNode;
        }
    }
}