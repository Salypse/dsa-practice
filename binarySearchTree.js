import { mergeSort } from "./sorting/mergeSort.js";

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
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
}