package elvis.practice.linkedlist;

public class LinkedList {
	
	private Node head;
	
	public LinkedList(Node head) {
		this.head = head;
	}
	
	public Node getHead() {
		return this.head;
	}
	
	public void printList() {
		Node tempHead = this.head;
		int counter = 0;
		
		if(tempHead == null) {
			System.out.println("Your LinkedList is empty");
		}
		
		while(tempHead != null) {
			System.out.println(tempHead);
			tempHead = tempHead.next;
			System.out.println(counter);
		}
		
		
	}
	
	public void printListData() {
		Node tempHead = this.getHead();
		int counter = 0;
		
		if(tempHead == null) {
			System.out.println("Your LinkedList is empty");
		}
		while(tempHead != null) {
			System.out.println(++counter + " " + tempHead.data);
			tempHead = tempHead.next;
		}
	}
	
//	public void addToHead(Node data) {
//		//To add to the Head, I have to take the current head...
//		return;
//		
//	}
	
	public void addToTail(Object data) {
		Node newNode = new Node(data);
		Node tempNode = this.head;
		
		if(this.head == null) {
			this.addToHead(data);
			return;
		}
		while(tempNode.next != null) {
			tempNode = tempNode.next;
		}
		
		Node temp = tempNode.next; //Last Node. I want data passed to be the Last Node
		tempNode.next = newNode;
		newNode.next = temp;	 
	}
	
	public void addToHead(Object data) {
		Node tempNode = this.head;
		
		if(this.head == null) {
			this.head = new Node(data);
			return;
		}
		
		this.head = new Node(data);
		this.head.next = tempNode;
		
		
		System.out.println("Check to see if it worked...");
		
		
	}
	
	public void removeTail() {
		Node tempHead = this.head;
		
		while(tempHead.next.next != null) {
			tempHead = tempHead.next;
		}
		
//		System.out.println(tempHead);
		tempHead.next = null;
	}
	
	
	
	public void addAtPosition(int position, Object data) {
		
		if(this.head == null) {
			this.head = new Node(data);
			return;
		}
//		
		
		
		if(position == 1) {
			this.addToHead(data);
			return;
		}
		
		if(position >= this.size()) {
			this.addToTail(data);
			return; 
		}
		
		Node tempHead = this.head;
		
		for(int i = 0; i < position - 2; i++) {
			tempHead = tempHead.next;
		}
	
		Node newNode = new Node(data);
		Node temp = tempHead.next;
		tempHead.next = newNode;
		newNode.next = temp;
	}
	
	public void removeAtPosition(int position) {
		Node tempHead = this.head;
		
		if(this.head == null) {
			throw new Error("There is nothing to remove, your list is empty.");
		}
		
		if(position == 1) {
			this.clear();
		}
		
		for(int i = 0; i < position - 2; i++) {
			tempHead = tempHead.next;
		}
		
		System.out.println(tempHead);
		tempHead.next = tempHead.next.next;
		
	}
	
	public int size() {
		Node tempHead = this.getHead();
		int counter = 0;
		while(tempHead != null) {
			System.out.println(++counter + " " + tempHead.data);
			tempHead = tempHead.next;
		}
		
		return counter;
	}
	
	public void clear() {
		this.head = null;
	}
	
	
	
//	public void addToHead(Object data) {
//		Node tempHead = this.getHead();
//		Node newNode = new Node(data);
//		
//		if(this.head == null) {
//			this.head = new Node(data);
//		}
//		
//		Node temp = tempHead.next;
//		newNode.next = tempHead;
//		tempHead = temp;
//		
//		//
//	}

	@Override
	public String toString() {
		return "LinkedList [head=" + head + "]";
	}
	
	
}
