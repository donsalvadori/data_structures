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

LinkList.prototype.removeHead = function() {
	if(!this.head) return null;
	var val = this.head.value;
	this.head = this.head.next;
	if(this.head) this.head.prev = null;
	else this.tail = null;
	return val;
};

LinkList.prototype.removeTail = function() {
	if(!this.tail) return null;
	var val = this.tail.value;
	this.head = this.head.next;
	if(this.head) this.head.prev = null;
	else this.tail = null;
	return val;
};


// var myLL = new LinkList();

// myLL.addToTail(10);
// myLL.addToTail(20);
// myLL.addToTail(30);

// console.log(myLL);

// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);

// console.log(ll);