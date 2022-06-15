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

}

function line(){
    console.log("===================")
}

let list1 = new LinkedList(new Node(4));


//Test 1: PrintList after Creation
// list1.printList();

//Test 2: Add To Head and PrintList
list1.addToHead("Elvis Garcia");
list1.addToHead("Omar Garcia");
list1.addToHead(new Water().getType());
// list1.printList();

//Test 3: Add To Tail and PrintList
list1.addToTail("Kenya Villamar");
//list1.printList();

//Test 4: Remove Head and PrintList
list1.removeHead();
list1.removeHead();
//list1.printList();

//Test 5: Remove Tail and PrintList
list1.removeTail();
list1.removeTail();
//list1.printList();

//Test 6: Get Size of List
// console.log(list1);
list1.addToHead(new Water().getType());
list1.addToHead("Seth Freakin' Rollins")
list1.removeHead();
// console.log(list1);
// list1.size();

//Test 7: Clear the List, Print, and Get Size
list1.clear();
//list1.size();
list1.addToHead("Test Test")
//list1.size();
// list1.printList();

//Test 8: Add at position
list1.addAtPosition("Some Data", 1);
list1.addAtPosition("Elvis Garcia", 1);
list1.addAtPosition("Omar Garcia", list1.size());
list1.addAtPosition("Luna", 4);
//list1.size();
//list1.printListData();

//Test 9: Clear List Again
list1.clear();
list1.printListData();
//list1.size();

//Test 10: Create New LinkedList
let list2 = new LinkedList(new Node("First Node"));
//list2.printList();

line();
line();
line();

list2.clear();

list2.addAtPosition("Elvis", 100);
list2.addAtPosition("Omar", 1);
list2.addAtPosition("Eddie", 2);
list2.addAtPosition("Kenya", 4);
list2.addAtPosition("Seth", 2);
list2.addToHead("Roman");

list2.removeAtPosition(2);
list2.removeAtPosition(4);
list2.removeAtPosition(1);
list2.addAtPosition("Wilmer", 3);

line();
line();
line();


list2.printListData();

line();


list2.getNode(1)








