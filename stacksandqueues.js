// Initializing the node for both stack and queue

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


//Building a stack with a linked list
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //add to the beginning so that first in is last out
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size ++;
        return this.size;
    }
    //remove from the beginning
    pop(){
        if(!this.first){
            return null;
        }
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size --;
        return temp.val;
    }
}


var stack = new Stack();

stack.push(23);
stack.push(350);
stack.push(3000);
stack.push(-9);
stack.pop();

console.log(stack);

//Building a queue with a linked list

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //add a value to the end of the list
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            var tempLast = this.last;
            tempLast.next = newNode;
            this.last = newNode;
        }
        this.size ++;
        return this.size;
    }
    //returns and removes the value from the beginning of the list
    dequeue(){
        if(!this.first){
            return null;
        }
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size --;
        return temp.val;
    }
}

var q = new Queue();
q.enqueue("First");
q.enqueue("Second");
q.enqueue("Third");
q.dequeue();

console.log(q);