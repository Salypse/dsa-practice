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

    pop() {
        let currentNode = this.headNode

        if (!currentNode.next) {
            this.headNode = null
            this.length = 0
        } else {
            while (currentNode.next.next) {
                currentNode = currentNode.next
            }
            currentNode.next = null
            this.length--;
        }
    }

    contains(value) {
        let currentNode = this.headNode

        while (currentNode) {
            if (currentNode.value === value) {
                return true
            }
            currentNode = currentNode.next
        }
        return false
    }

    find(value) {
        let currentNode = this.headNode
        let currentIndex = 0;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentIndex
            } else {
                currentNode = currentNode.next
                currentIndex++;
            }
        }
        return null
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

console.log(testList)