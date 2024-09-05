/* eslint-env mocha */
import { expect } from "chai";
import { LinkedList, Node } from "../linked-list";

describe("A linked list implementation", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe("`Node` class", () => {
    it("should take a value argument in the constructor and define next and previous to be null by default", () => {
      const node = new Node("test");
      expect(node.value).to.equal("test");
      expect(node.next).to.equal(null);
      expect(node.previous).to.equal(null);
    });
  });

  describe("`LinkedList` class", () => {
    it("should take no arguments in the constructor and define head and tail to be null", () => {
      expect(linkedList.head).to.equal(null);
      expect(linkedList.tail).to.equal(null);
    });

    it("has methods `addToTail`, `removeTail`, and `search`", () => {
      expect(typeof linkedList.addToTail).to.equal("function");
      expect(typeof linkedList.removeTail).to.equal("function");
      expect(typeof linkedList.search).to.equal("function");
    });

    describe("`addToTail` method", () => {
      it("should take a value as a parameter", () => {
        // the length of a function returns how many parameters it has
        expect(linkedList.addToTail.length).to.equal(1);
      });

      it("should use `Node` class to add nodes", () => {
        linkedList.addToTail("first");
        expect(linkedList.tail instanceof Node).to.equal(true);
      });

      it("should be able to add to tail without removing or overwriting existing nodes", () => {
        linkedList.addToTail("first");
        expect(linkedList.tail.value).to.equal("first");

        linkedList.addToTail("second");
        expect(linkedList.tail.value).to.equal("second");
        expect(linkedList.tail.previous.value).to.equal("first");
      });

      it("if the linked list consists of a single node after adding to tail, that node should be both the head and the tail", () => {
        linkedList.addToTail("only");
        expect(linkedList.head.value).to.equal("only");
        expect(linkedList.head).to.equal(linkedList.tail);
        expect(linkedList.head.next).to.equal(null);
        expect(linkedList.head.previous).to.equal(null);
      });
    });

    describe("`removeTail` method", () => {
      xit("should return the `value` of the removed tail node", () => {
        linkedList.addToTail("first");
        linkedList.addToTail("second");
        linkedList.addToTail("third");
        expect(linkedList.removeTail()).to.equal("third");
        expect(linkedList.removeTail()).to.equal("second");
        expect(linkedList.removeTail()).to.equal("first");
      });

      xit("should reassign the `tail` after the current tail node is removed", () => {
        linkedList.addToTail("first");
        linkedList.addToTail("second");
        linkedList.addToTail("third");

        linkedList.removeTail(); // remove 'third'
        expect(linkedList.tail.value).to.equal("second");

        linkedList.removeTail(); // remove 'second'
        expect(linkedList.tail.value).to.equal("first");
      });

      xit("should make sure the `next` of any newly appointed tail is null", () => {
        linkedList.addToTail("first");
        linkedList.addToTail("second");
        linkedList.addToTail("third");

        linkedList.removeTail();
        expect(linkedList.tail.value).to.equal("second");
        expect(linkedList.tail.next).to.equal(null);

        linkedList.removeTail();
        expect(linkedList.tail.value).to.equal("first");
        expect(linkedList.tail.next).to.equal(null);
      });

      xit("returns null if there is no tail to remove (ie: the list is empty, or all nodes have been removed)", () => {
        expect(linkedList.removeTail()).to.equal(null);

        linkedList.addToTail("first");
        linkedList.addToTail("second");
        linkedList.addToTail("third");
        linkedList.removeTail();
        linkedList.removeTail();
        linkedList.removeTail();
        expect(linkedList.removeTail()).to.equal(null);
      });
    });

    // The `search` method takes a "comparator" as a parameter, traverses the linked list, and returns the `value` of the matching node if found, or `null` if not found.
    // The "comparator" could be a string or a function.
    // When the comparator is a string, the `search` method will compare each node's `value` with the comparator string.
    // When the comparator is a function, that function will accept a value as a parameter and return a boolean indicating if the value is a match. The `search` method will use the comparator function on each node's `value` to determine if it is a match.
    describe("`search` method", () => {
      it("should return the correct values when searching for a string or number", () => {
        linkedList.addToTail("one");
        linkedList.addToTail("two");
        linkedList.addToTail("three");
        expect(linkedList.search("one")).to.equal("one");
        expect(linkedList.search("sdd")).to.equal(null);
        expect(linkedList.search("three")).to.equal("three");
      });

      xit("should be able to take functions as search inputs", () => {
        linkedList.addToTail("one");
        linkedList.addToTail("two");
        const foundNode = linkedList.search((nodeValue) => {
          return nodeValue === "two";
        });
        expect(foundNode).to.equal("two");
      });

      // This spec demonstrates the utility of the previous spec.
      // If you are passing the last one correctly, this one should already pass!
      xit("should therefore be able to store and search for objects, not just strings", () => {
        function UserNode(name, email, city) {
          this.name = name;
          this.email = email;
          this.city = city;
        }

        linkedList.addToHead(new UserNode("Nimit", "nimit@fs.com", "New York"));
        linkedList.addToHead(new UserNode("David", "david@fs.com", "New York"));
        linkedList.addToHead(
          new UserNode("Paul", "paul@yc.com", "Mountain View")
        );

        const foundNode1 = linkedList.search((userNode) => {
          return userNode.name === "Nimit";
        });
        expect(foundNode1.email).to.equal("nimit@fs.com");

        const foundNode2 = linkedList.search((userNode) => {
          return userNode.email === "david@fs.com";
        });
        expect(foundNode2.city).to.equal("New York");

        const foundNode3 = linkedList.search((userNode) => {
          return userNode.city === "Mountain View";
        });
        expect(foundNode3.name).to.equal("Paul");
      });
    });

    describe("`head` functionality, (doubly linked)", () => {
      xit("has the functions `addToHead`, `removeHead`", () => {
        expect(typeof linkedList.addToHead).to.equal("function");
        expect(typeof linkedList.removeHead).to.equal("function");
      });

      describe("`addToHead` method", () => {
        xit("should take a value as a parameter", () => {
          // the length of a function returns how many parameters it has
          expect(linkedList.addToHead.length).to.equal(1);
        });

        xit("should use `Node` class to add nodes", () => {
          linkedList.addToHead("first");
          expect(linkedList.head instanceof Node).to.equal(true);
        });

        xit("should be able to add to head without removing or overwriting existing nodes", () => {
          linkedList.addToHead("first");
          expect(linkedList.head.value).to.equal("first");

          linkedList.addToHead("zeroth");
          expect(linkedList.head.value).to.equal("zeroth");
          expect(linkedList.head.next.value).to.equal("first");
        });

        xit("if the linked list consists of a single node after adding to head, that node should be both the head and the tail", () => {
          linkedList.addToHead("only");
          expect(linkedList.head.value).to.equal("only");
          expect(linkedList.head).to.equal(linkedList.tail);
          expect(linkedList.head.next).to.equal(null);
          expect(linkedList.head.previous).to.equal(null);
        });
      });

      describe("`removeHead` method", () => {
        xit("should return the `value` of the removed head node", () => {
          linkedList.addToTail("first");
          linkedList.addToTail("second");
          linkedList.addToTail("third");
          expect(linkedList.removeHead()).to.equal("first");
          expect(linkedList.removeHead()).to.equal("second");
          expect(linkedList.removeHead()).to.equal("third");
        });

        xit("should reassign the `head` after the current head node is removed", () => {
          linkedList.addToTail("first");
          linkedList.addToTail("second");
          linkedList.addToTail("third");

          linkedList.removeHead(); // remove 'first'
          expect(linkedList.head.value).to.equal("second");

          linkedList.removeHead(); // remove 'second'
          expect(linkedList.head.value).to.equal("third");
        });

        xit("should make sure the `previous` of any newly appointed head is null", () => {
          linkedList.addToTail("first");
          linkedList.addToTail("second");
          linkedList.addToTail("third");

          linkedList.removeHead();
          expect(linkedList.head.value).to.equal("second");
          expect(linkedList.head.previous).to.equal(null);

          linkedList.removeHead();
          expect(linkedList.head.value).to.equal("third");
          expect(linkedList.head.previous).to.equal(null);
        });

        xit("returns null if there is no head to remove (ie: the list is empty, or all nodes have been removed)", () => {
          expect(linkedList.removeHead()).to.equal(null);

          linkedList.addToTail("first");
          linkedList.addToTail("second");
          linkedList.addToTail("third");
          linkedList.removeHead();
          linkedList.removeHead();
          linkedList.removeHead();
          expect(linkedList.removeHead()).to.equal(null);
        });

        xit("should reset head and tail to null when last node is removed", () => {
          linkedList.addToTail("first");
          linkedList.removeHead();
          expect(linkedList.head).to.equal(null);
          expect(linkedList.tail).to.equal(null);
        });
      });
    });
  });
});
