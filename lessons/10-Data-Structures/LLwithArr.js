class LinkedList {
  constructor() {
    // linked list is an array
    this.linkedList = [];
    this.head = null;
    this.tail = null;
  }

  addToTail(nodeValue) {
    // creating new Node and assigning to tail
    this.tail = new Node(nodeValue);
    // if there are no other values in linkedList...
    if (this.linkedList.length === 0) {
      // ...set head to tail if its the ONLY item in the list
      this.head = this.tail;
    } else {
      // there is more than one item in linked list so...
      // set tail previous to the CURRENT last node in the linkedList
      this.tail.previous = this.linkedList[this.linkedList.length - 1];
      // last node in list: set its next prop to  current tail node
      this.linkedList[this.linkedList.length - 1].next = this.tail;
    }
    // grab this created node and push it to the linkedList
    this.linkedList.push(this.tail);
  }

  addToHead(nodeValue) {
    // creating new Node and assigning it to head
    this.head = new Node(nodeValue);
    // if there are no other values in linkedList...
    if (this.linkedList.length === 0) {
      // ...set tail to head if its the ONLY item in the list
      this.tail = this.head;
    } else {
      // this is more than one item in linked list so...
      // set head.next to the CURRENT first node in the linkedList
      this.head.next = this.linkedList[0];
      // first node in list: set its previous prop to current head node
      this.linkedList[0].previous = this.head;
    }
    // grab this created node and push it to the linkedList
    this.linkedList.unshift(this.head);
  }

  removeHead() {
    // we should be able to pull head if there's a value in linkedList
    if (this.linkedList.length > 0) {
      // stuff exists in list, pull first node from list
      const tempNode = this.linkedList.shift();
      // store tempValue -> declare new head -> return tempValue
      // check length of list AFTER popping off head
      if (this.linkedList.length > 0) {
        // new head is first item we just shifted to linkedList
        this.head = this.linkedList[0];
        // tempNode doesn't need previous because it's no longer first item in list
        this.head.previous = null;
      } else {
        // No items left in the list
        this.head = null;
        this.tail = null;
      }
      return tempNode.value;
    } else {
      // no nodes left in linkedList
      return null;
    }
  }

  removeTail() {
    // we should be able to pull tail if there's a value in linkedList
    if (this.linkedList.length > 0) {
      // stuff exists in list, pop last node from list
      const tempNode = this.linkedList.pop();
      // store tempValue -> declare new tail -> return tempValue
      // check length of list AFTER popping off tail
      if (this.linkedList.length > 0) {
        // new tail is last item we just popped off linkedList
        this.tail = this.linkedList[this.linkedList.length - 1];
        // tempNode doesn't need next because it's no longer last item in list
        this.tail.next = null;
      } else {
        // No items left in the list
        this.head = null;
        this.tail = null;
      }
      return tempNode.value;
    } else {
      // no nodes left in linkedList
      return null;
    }
  }

  search(searchValue) {
    // check type of searchValue
    if (typeof searchValue === "function") {
      // loop through nodes
      for (let i = 0; i < this.linkedList.length; i++) {
        // if callback of node value is true...
        if (searchValue(this.linkedList[i].value)) {
          // ...return that value
          return this.linkedList[i].value;
        }
      }
    } else {
      // can't use .forEach because that doesn't break on if statements
      // regular for loops will break on a return
      for (let i = 0; i < this.linkedList.length; i++) {
        if (this.linkedList[i].value === searchValue) {
          return searchValue;
        }
      }
    }
    // didn't find the searchValue in linkedList
    return null;
  }
}

class Node {
  // constructor takes value, and defaults previous and next to null
  // previous and next of each node will be modified according to linkedList methods
  // -- addToHead, addToTail, removeHead, removeTail
  constructor(value, previous = null, next = null) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}
