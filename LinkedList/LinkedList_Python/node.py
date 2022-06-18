class Node:
	def __init__(self, data, next = None):
		self.data = data
		self.next = next
	
	def __str__(self) -> str:
		# return f"  Node Data: {self.data}\nNext Node: {self.next}"
		return "{ Node { data: " + self.data.__str__() + ", next: " + (self.next.__str__() if self.next is not None else "null") + " }"