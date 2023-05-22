// Demonstrate how stack works in JS.
// We often utilizes JS' array.
// I will perform the following push and pop sequence for the demonstration
// push(5) - push(2) - push(3) - push(7) - pop() - push(1) - push (4) - pop()

/* 
    1) WHAT DOES PUSH DO? It appends new elements to the end of an array.
    2) WHAT DOES POP DO? It removes the last element from an array.

*/
let stack = [];

export default () => {
  stack.push(5);
  stack.push(2);
  stack.push(3);
  stack.push(7);
  console.log(stack);
  stack.pop();
  console.log(stack);
  stack.push(1);
  stack.push(4);
  stack.pop();
  console.log(
    "Currently, this stack console is ordered from first element came in to the last one came in:\n",
    stack
  );
  // I utilize .slice() before .reverse() method to preserve the original order of the elements in the stack array.
  let reversed = stack.slice().reverse();
  console.log(
    "Currently, this stack console is ordered from the last element came in(head) to the first one came in:\n",
    reversed
  );
  console.log(stack);
};
