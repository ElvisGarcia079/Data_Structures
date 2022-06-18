const Node = require("./Node");
const Water = require("./Water");

class LinkedList{
  //Create

    constructor(head){
        if(!(head instanceof Node)){
            throw new Error("Must include a Node Object");
        }
        this.head = head;
    }

    //Read
    printList(){
        let tempHead = this.head;
        while(tempHead != null){
            console.log(tempHead);
            tempHead = tempHead.next;
        }  
    }

    //Read
    printListData(){
        let tempHead = this.head;
        let counter = 1;
        while(tempHead != null){
            console.log(counter, tempHead.data);
            tempHead = tempHead.next;
            counter++;
        }  
    }

    //Update
    addToHead(data){
        let tempHead = this.head;
  
        if(!this.head){
            this.head = new Node(data);
        }

        this.head = new Node(data);
        this.head.next = tempHead;
    }

    //Update
    addToTail(data){
        let tempHead = this.head;
        while(tempHead.next){
            tempHead = tempHead.next;
          
        }
        let newNode = new Node(data);
        tempHead.next = newNode;
        newNode.next = null;
       
    }

    //Update
    addAtPosition(data, position){

       if(position == 1 || this.size() == 0){
          this.addToHead(data);
          return;
       }

       if(position == this.size() + 1){
        this.addToTail(data);
        return;
       }

       if(position > this.size()){
           throw new Error("You want to add to position: " + position + " but there are only " + this.size() + " total nodes in this Linked List");
       }

       let temp = this.head;
       let counter = 2;

       while(temp != null && counter < position){
          temp = temp.next;
          counter++;
       }
       
       let newNode = new Node(data);
       newNode.next = temp;
       newNode.next = temp.next;
       temp.next = newNode;
    
       
    }

    //Update
    removeAtPosition(position){
        
        if(position == this.size() + 1) {
            this.removeTail();
            return;
        }

        if(position == 1){
            this.removeHead();
            return;
        }

        if(position > this.size()) {
            throw new Error("You want to add to position: " + position + " but there are only " + this.size() + " total nodes in this Linked List");
        }

        let temp = this.head;
        let counter = 2;

        while(temp != null && counter < position){
            temp = temp.next;
            counter++;
         }

       temp.next = temp.next.next;
        
    }

    //Delete
    removeHead(){
        let temp = this.head; 
        this.head = temp.next;
    }

    clear(){
        this.head = null;
    }

    //Delete
    removeTail(){
        let tempHead = this.head;
        while(tempHead.next.next != null){
            tempHead = tempHead.next;
        }

        tempHead.next = tempHead.next.next;
    }

    //Read
    size(){
        let counter = 0;
        let temp = this.head;
        while(temp != null){
            temp = temp.next;
            counter++;
        }
        
        
        return counter;
    }

    //Read
    getNode(position){
        let temp = this.head;
        let counter = 1;

        if(position == 1){
            console.log(temp);
            return temp;
        }

        if(position == list1.size()){
            while(temp != null){
                temp = temp.next;
            }

            console.log(temp);
            return temp;
        }

        while(temp != null && position > counter) {
            counter++;
            temp = temp.next;
        }

        console.log(temp);
        return temp;
    }

    //High level: - Linda Idea
        // Traverse through entire list
        // Take each value and we are going to unshift [to put in front] it to an array
        // By the time we get to the end of the LL we have an array with the values reversed
        // Traverse thorugh linkedlist again, assign this node's data with the current data in the array.

        //O(n) - Time
        //O(n) - Space
    reverse(){
        let arr = [];
       
        let currentNode = this.head;
        let anotherBeginning = this.head;

        while(currentNode != null){
            arr.unshift(currentNode.data);
            currentNode = currentNode.next;
        }
        
        while(anotherBeginning != null){
            anotherBeginning.data = arr[0];
            arr.shift();
            anotherBeginning = anotherBeginning.next; 
        }
        
        console.log(this)
        return this;

    }

    //We have two pointers.
       // We get the size
           // Helps determine how many times we need to repeat some sort of loop that 
           //keeps swapping until we hit the center. Then everything is reversed. 

        reverse2(){
        
        }
    }
    




function line(){
    console.log("===================")
}

let list1 = new LinkedList(new Node(4));


list1.addAtPosition("Elvis", 2);
list1.addAtPosition("Linda", 1);
list1.printList();
line();
line();
list1.reverse().printList();










