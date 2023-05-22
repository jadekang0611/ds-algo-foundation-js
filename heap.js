/**
 * Initializes a new empty `PriorityQueue` with the given `comparator(a, b)`
 * function, uses `.DEFAULT_COMPARATOR()` when no function is provided.
 *
 * The comparator function must return a positive number when `a > b`, 0 when
 * `a == b` and a negative number when `a < b`.
 *
 * @param {Function}
 * @return {PriorityQueue}
 * @api public
 */

export class PriorityQueue {
  constructor(comparator) {
    this._comparator = comparator || PriorityQueue(DEFAULT_COMPARATOR);
    this._elements = [];
  }

  /**
   * Compares `a` and `b`, when `a > b` it returns a positive number, when
   * it returns 0 and when `a < b` it returns a negative number.
   *
   * @param {String|Number} a
   * @param {String|Number} b
   * @return {Number}
   * @api public
   */

  static DEFAULT_COMPARATOR(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else {
      a = a.toString();
      b = b.toString();

      if (a == b) return 0;

      return a > b ? 1 : -1;
    }
  }

  /**
   * Returns whether the priority queue is empty or not.
   *
   *  @return (Boolean)
   *  @api public
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Peeks at the top element of the priority queue.
   *
   * @return {Object}
   * @throws {Error} when the queue is empty
   * @api public
   */
  peek() {
    if (this.isEmpty()) throw new Error("PriorityQueue is empty.");
    return this._elements[0];
  }
  /**
   * Dequeues the top element of the priority queue
   *
   * @return {Object}
   * @throws {Error} when the queue is empty
   * @api public
   */
  deq() {
    let first = this.peek();
    let last = this._elements.pop();
    let size = this.size();

    if (size === 0) return first;

    this._elements[0] = last;
    let current = 0;

    while (current < size) {
      var largest = current;
      var left = 2 * current + 1;
      var right = 2 * current + 2;

      if (left < size && this._compare(left, largest) >= 0) {
        largest = left;
      }

      if (right < size && this._compare(right, largest) >= 0) {
        largest = right;
      }

      if (largest === current) break;

      this._swap(largest, current);
      current = largest;
    }
    return first;
  }
  /**
   * Enqueues the `element` at the priority queue and returns its new size.
   *
   * @param {Object} element
   * @return {Number}
   * @api public
   */
  enq(element) {
    var size = this._elements.push(element);
    var current = size - 1;

    while (current > 0) {
      var parent = Math.floor((current - 1) / 2);

      if (this._compare(current, parent) <= 0) break;

      this._swap(parent, current);
      current = parent;
    }

    return size;
  }

  /**
   * Returns the size of the priority queue.
   *
   * @return {Number}
   * @api public
   */
  size() {
    return this._elements.length;
  }

  /**
   *  Iterates over queue elements
   *
   *  @param {Function} fn
   */
  forEach(fn) {
    return this._elements.forEach(fn);
  }

  /**
   * Compares the values at position `a` and `b` in the priority queue using its
   * comparator function.
   *
   * @param {Number} a
   * @param {Number} b
   * @return {Number}
   * @api private
   */
  _compare(a, b) {
    return this._comparator(this._elements[a], this._elements[b]);
  }

  /**
   * Swaps the values at position `a` and `b` in the priority queue.
   *
   * @param {Number} a
   * @param {Number} b
   * @api private
   */
  _swap(a, b) {
    var aux = this._elements[a];
    this._elements[a] = this._elements[b];
    this._elements[b] = aux;
  }
}

export default () => {
  let pq = new PriorityQueue(function (a, b) {
    return a.cash - b.cash;
  });
  console.log("This is the current Tree", pq);
  pq.enq({ cash: 250, name: "Doohyun Kim" });
  console.log("This is the current Tree after the first enqueue", pq);
  pq.enq({ cash: 300, name: "Gildong Hong" });
  console.log("This is the current Tree after the second enqueue", pq);
  pq.enq({ cash: 150, name: "Monica Boo" });
  console.log("This is the current Tree after the third enqueue", pq);
  console.log("This is the HEAP DEMO");
  console.log(pq.size());
  console.log("Which one is going to come out first: ", pq.deq());
};
