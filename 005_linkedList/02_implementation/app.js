// 10 --> 5 --> 16

//Structure
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = {
      value,
      next: null,
    };

    this.tail.next = node;
    this.tail = node;
    this.length++;

    return this;
  }

  preppend(value) {
    const node = {
      value,
      next: null,
    };

    node.next = this.head;

    this.head = node;
    this.length++;

    return this;
  }
}

const myLinkedList = new LinkedList(10);

console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));

console.log(myLinkedList.preppend(0));
