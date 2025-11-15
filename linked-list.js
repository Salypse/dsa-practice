class LinkedList{
    constructor() {
        this.head = null;
        this.length = 0;
    };

    append(value) {
        if (!this.head) {
            this.head = new Node(value)
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                if (currentNode.next != null) {
                    currentNode = currentNode.next
                } else {
                    currentNode.next = new Node(value)
                    break
                }
            }

        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value)
        this.length++;

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    size() {
        return this.length;
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
console.log(testList.size())

console.log(testList)