package elvis.practice.linkedlist;
import elvis.practice.*;

public class App {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		LinkedList list1 = new LinkedList(new Node("Elvis"));
		Data<Integer> data1 = new Data<Integer>(4);
		Data<Water> data2 = new Data<Water>(new Water());
		
		
		
//		list1.printListData();
		list1.addToTail("Elvis Garcia");
		list1.addToTail(5);
		list1.addToTail(true);
		list1.addToTail(data1);
		list1.addToTail(data2);
		
		
		System.out.println("The size is: " + list1.size());
		list1.printListData();
		
		line();
		line();
		
		list1.clear();
		list1.printListData();
		
		line();
		line();
		
		list1.addToHead("Hello World");
		list1.addToHead("What's Good World");
		list1.printListData();
		
		line();
		line();
		
		list1.clear();
//		list1.addToHead("Red Iphone");
		list1.addToTail("Red Iphone");
		list1.addToTail("Blue Tesla");
		list1.addToHead("Black Alexa");
		list1.addAtPosition(1, "Silver Toyota");
		list1.addAtPosition(19, false);
		list1.addAtPosition(1, false);
		list1.addAtPosition(3, "Ethereum");
		list1.addAtPosition(4, new Data<Water>(new Water()));
		line();
		line();
		list1.printListData();
		list1.removeTail();
		line();
		line();
		list1.printListData();
		line();
		line();
		list1.removeAtPosition(4);
		list1.removeAtPosition(3);
		list1.printListData();
		
		
	}
	
	static void line() {
		System.out.println("====================");
	}
	
	

}




class Data<T> {
	private T data;
	
	public Data(T data) {
		this.data = data;
	}
	
	public T getData() {
		return this.data;
	}

	@Override
	public String toString() {
		return "Data [data=" + data + "]";
	}
		
}

class Water {
	private String type = "water";
	
	public String getType() {
		return this.type;
	}

	@Override
	public String toString() {
		return "Water [type=" + type + "]";
	}
	
	
}