class LinkedList{
    constructor() {
        this.headNode = null;
        this.length = 0;
    };

    append(value) {
        this.length++;

        if (!this.headNode) {
            this.headNode = new Node(value)
        } else {
            let currentNode = this.headNode;
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = new Node(value)
        }
    }

    prepend(value) {
        const newNode = new Node(value)
        this.length++;

        if (!this.headNode) {
            this.headNode = newNode;
        } else {
            newNode.next = this.headNode
            this.headNode = newNode
        }
    }

    size() {
        return this.length;
    }

    head() {
        return this.headNode;
    }

    tail() {
        let currentNode = this.headNode
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    at(index) {
        if (index === 0) {
            return this.headNode
        } else {
            let currentNode = this.headNode

            for (let i = 0; i === index; i++) {
                currentNode = currentNode.next
            }  

            return currentNode
        }
    }
};

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    };
};

const testList = new LinkedList()

testList.append("2")
testList.prepend("1")
testList.append("3")

console.log(`Size: ${testList.size()}`)
console.log(testList.head())
console.log(testList.tail())
console.log(testList.at(1))

console.log(testList)