function LinkedList() {
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}

LinkList.prototype.addToHead = function(value) {
	var newNode = new Node(value, this.head, null);
	if(this.head) this.head.prev = newNode;
	else this.tail = newNode;
	this.head = newNode;
};

LinkList.prototype.addToTail = function(value) {
	var newNode = new Node(value, null, this.tail);
	if(this.tail) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
};

// var ll = new LinkList();

// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);

// console.log(ll);