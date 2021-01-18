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

    this.head = node;
    length++;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.preppend(0);

console.log(myLinkedList);
