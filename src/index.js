class Sorter {
  constructor() {
    // your implementation
      this.arr = [];
    this.length=0;
  }

  add(element) {
    // your implementation
    this.length++;
    this.arr.splice(this.arr.length,0,element);
  }

  at(index) {
    // your implementation
  }

  get length() {
    // your implementation
  }

  toArray() {
    // your implementation
  }

  sort(indices) {
    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
