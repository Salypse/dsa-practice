import { mergeSort } from "./sorting/mergeSort.js";

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(arr) {
        this.uniqueArr = [...new Set(mergeSort(arr))]
        this.root = this.buildTree(this.uniqueArr)
    }

    buildTree(arr) {
        if (arr.length === 0) {
            return null
        } if (arr.length === 1) {
            return new Node(arr)
        }

        const middle = Math.floor(arr.length / 2)
        const root = new Node(arr[middle])

        root.left = this.buildTree(arr.slice(0, middle))
        root.right = this.buildTree(arr.slice(middle + 1))

        return root
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value)
            return
        }

        const insertRecursive = (node) => {
            if (!node) {
                return new Node(value)
            }

            if (value < node.data) {
                node.left = insertRecursive(node.left)
            } else if (value > node.data) {
                node.right = insertRecursive(node.right)
            } else {
                //Returns if value is already in tree
                return node
            }
            return node
        }
        this.root = insertRecursive(this.root)
    }

    delete(value) {
        if (this.root === null) {
            return
        }

        const deleteRecursive = (node, valueToRemove) => {
            if (!node) {
                return null
            }

            if (valueToRemove < node.data) {
                node.left = deleteRecursive(node.left, valueToRemove)
            } 
            else if (valueToRemove > node.data) {
                node.right = deleteRecursive(node.right, valueToRemove)
            } else {
                //0 or 1 child nodes
                if (!node.left) return node.right
                if (!node.right) return node.left
                
                //2 children nodes
                else {
                    let successor = node.right;
                    while (successor.left) {
                        successor = successor.left
                    }

                    node.data = successor.data
                    node.right = deleteRecursive(node.right, successor.data)
                }
            }
            return node
        }
        this.root = deleteRecursive(this.root, value)
    }

    find(value) { 
        if (!this.root) { 
            return null 
        } 
        const findRecursive = (node) => { 
            if (!node) return null
            
            if (value < node.data) { 
                return findRecursive(node.left) 
            } else if (value > node.data) { 
                return findRecursive(node.right) 
            } else return node 
        }
        return findRecursive(this.root)  
    }
}