package elvis.practice.linkedlist;

public class Node {
	
	public Object data;
	public Node next;
	
	public Node(Object data) {
		this.data = data;
		this.next = null;
	}
	
	public Node(Object data, Node next) {
		this.data = data;
		this.next = null;
	}
	
//	public Object getData() {
//		return this.data;
//	}
//	
//	public Node getNext() {
//		return this.next;
//	}
//	
//	public void setNext(Node node) {
//		this.next = node;
//	}
//	
//	public Object setData(Object data) {
//		return this.data = data;
//	}

	@Override
	public String toString() {
		return "Node [data=" + data + ", next=" + next + "]";
	}
	
	
}
