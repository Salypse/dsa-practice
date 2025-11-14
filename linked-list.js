class LinkedList{
    constructor() {
        this.head = null;
    };

    append(value) {
        if (!this.head) {
            this.head = new Node(value)
        } else {
            let currentNode = this.head;
            while (true) {
                if (currentNode.next != null) {
                    currentNode = currentNode.next
                } else {
                    currentNode.next = new Node(value)
                    break
                }
            }

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

testList.append("1")
testList.append("2")

console.log(testList)