import { Queue } from "./helper.js";

const queue = new Queue();

export default () => {
  // insert (5), insert(2), insert(3), insert(7), delete(), insert(1), insert(4), delete()
  queue.enqueue(5);
  console.log("HEAD INDEX: ", queue.headIdx, "TAIL INDEX: ", queue.tailIdx);
  queue.enqueue(2);
  console.log("HEAD INDEX: ", queue.headIdx, "TAIL INDEX: ", queue.tailIdx);
  queue.enqueue(3);
  console.log("HEAD INDEX: ", queue.headIdx, "TAIL INDEX: ", queue.tailIdx);
  queue.enqueue(7);
  console.log("HEAD INDEX: ", queue.headIdx, "TAIL INDEX: ", queue.tailIdx);
  queue.dequeue();
  console.log("HEAD INDEX: ", queue.headIdx, "TAIL INDEX: ", queue.tailIdx);
  queue.enqueue(1);
  console.log("HEAD INDEX: ", queue.headIdx, "TAIL INDEX: ", queue.tailIdx);
  queue.enqueue(4);
  console.log("HEAD INDEX: ", queue.headIdx, "TAIL INDEX: ", queue.tailIdx);
  queue.dequeue();
  console.log("HEAD INDEX: ", queue.headIdx, "TAIL INDEX: ", queue.tailIdx);

  // print out the queue (first come first printed)
  console.log("Here is the Queue:");
  while (queue.getQueueSize() != 0) {
    console.log(queue.dequeue());
  }
};
