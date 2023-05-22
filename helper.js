export class Queue {
  constructor() {
    this.items = {};
    this.headIdx = 0;
    this.tailIdx = 0;
  }
  // enqueue method for inserting a new element to the queue
  enqueue(item) {
    this.items[this.tailIdx] = item;
    this.tailIdx++;
  }
  // dequeue method for deleting the first element that came into the queue
  dequeue() {
    // set the item that I need to remove using the current head pointer
    const item = this.items[this.headIdx];
    // delete the memory of the current head element
    delete this.items[this.headIdx];
    this.headIdx++;
    return item;
  }
  // peek method for just peeking in my queue to see what's next item to take out
  peek() {
    return this.items[this.headIdx];
  }
  // getQueueSize method for finding out the queue size.
  getQueueSize() {
    return this.tailIdx - this.headIdx;
  }
}
