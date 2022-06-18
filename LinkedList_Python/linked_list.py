from node import Node


class LinkedList:

    def __init__(self, head):
        if(not isinstance(head, Node)):
            raise Exception("Please enter a Node Object!")
        
        self.head = head

    def printList(self):
        tempNode = self.head

        while(tempNode.next != None):
            # print(tempNode)
            tempNode = tempNode.next
        
        print(tempNode)

    #   let tempHead = this.head;
    #     while(tempHead != null){
    #         console.log(tempHead);
    #         tempHead = tempHead.next;
        # } 

    def printListData(self):
        tempHead = self.head
        counter = 0
        while(tempHead != None):
            counter += 1
            print(counter, tempHead.data)
            tempHead = tempHead.next

    def printListNext(self):
        tempHead = self.head
        counter = 1
        while(tempHead.next is not None):
            print(counter, tempHead.next.data)
            tempHead = tempHead.next
            counter += 1
        

    

    def addToHead(self, data):
        #  let tempHead = this.head;
        tempHead = self.head
        # tempNext = self.head.next
  
        # if(!this.head){
        #     this.head = new Node(data);
        # }
        if(not self.head):
            self.head = Node(data)

        # this.head = new Node(data);
        self.head = Node(data)
        self.head.next = tempHead

    
        

    def addToTail(self, data):
        newNode = Node(data)
        tempHead = self.head
        while(tempHead.next is not None):
            tempHead = tempHead.next
        
        
        temp = tempHead.next
        tempHead.next = newNode
        newNode.next = temp
        


    def size(self):
        counter = 0
        tempNode = self.head
        while(tempNode is not None):
            counter += 1
            tempNode = tempNode.next
        
        return counter

    def removeTail(self):
        tempHead = self.head
        while(tempHead.next.next is not None):
            tempHead = tempHead.next
        
        # print("This is the node that we are looking at: " + tempHead.__str__())
        tempHead.next = None
        
    def removeHead(self):
        self.head = self.head.next

    def removeAtPosition(self, position):
        if(position == self.size() + 1):
            self.removeTail()
            return

        if(position == 1):
            self.removeHead()
            return

        counter = 2
        tempHead = self.head
        while(counter != position):
            counter += 1
            tempHead = tempHead.next
        
        print(tempHead)
        tempHead.next = tempHead.next.next

    def addToPosition(self, data, position):
        newNode = Node(data)
        tempHead = self.head
        counter = 2

        if(position == 1):
            self.addToHead()
            return
        
        if(position == self.size() + 1):
            self.addToTail()
            return 


        while(tempHead.next is not None and counter is not position):
            tempHead = tempHead.next
            counter += 1
        
        # print(tempHead)
        temp = tempHead.next
        tempHead.next = newNode
        newNode.next = temp

    def reverse(self):
        arr = []
        counter = 0

        tempHead = self.head
        newBeginning = self.head

        #Iterate through the list and get to the end...
        #Add the data to the array

        while(tempHead is not None):
            arr.append(tempHead.data)
            tempHead = tempHead.next
        
        # print(arr)

        #Now we are going to add from the back of the list... using pop.

        while(newBeginning is not None):
            newBeginning.data = arr.pop()
            newBeginning = newBeginning.next

        
        
        
       

        

        

        
    def __str__(self) -> str:
        # return "{ " + ("Head" if ((self.size() == 1)) else "Node ") + "{ Node {" +" data: " + self.head.data + ", next: " + (self.head.next.__str__() if self.head.next != None else "null" + "}")
        listInfo = ""
        counter = 1
        tempHead = self.head
        while(tempHead.next is not None):
           listInfo += "{ data: " + tempHead.data + ", next: " + (tempHead.next.data.__str__() + " " + tempHead.next.next.__str__()) + "}"
           print(counter, tempHead.data)
           tempHead = tempHead.next
        
        return listInfo

def line():
    print("========================")
        
node1 = Node("Elvis")
list1 = LinkedList(node1)

# print(list1)
#list1.size()

list1.addToHead("Omar")
list1.addToHead("Linda")
list1.addToHead("Roman")
list1.addToHead(Node(5))
# list1.addToHead(node.Node("Kenya"))
# print(list1)
# print(list1.size())
# print(list1.printListData(), list1.printListNext())
list1.addToTail("Riddle")
list1.printListData()
# list1.printListNext()
line()
line()
list1.removeTail()
list1.removeTail()
list1.removeHead()
list1.removeHead()
line()
line()
list1.printListData()

list1.removeAtPosition(2)
line()
list1.printListData()
list1.addToHead("Some Data")
list1.addToTail("Some Other Data")
line()
line()
list1.addToPosition("New 2", 2)
list1.printListData()
list1.reverse()
list1.printListData()


