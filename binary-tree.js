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

	}

	size() {

	}

	isEmpty() {

	}
}
