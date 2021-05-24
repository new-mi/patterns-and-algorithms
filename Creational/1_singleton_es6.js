class Counter {
  constructor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance
    }
    Counter.instance = this
    this.count = 0
    return this
  }

  getCount() {
    return this.count
  }

  increaseCount() {
    return this.count++
  }
}

// Example
const myCount1 = new Counter()
const myCount2 = new Counter()

myCount1.increaseCount()
myCount1.increaseCount()
myCount2.increaseCount()
myCount2.increaseCount()

console.log(myCount1.getCount()); // 4
console.log(myCount2.getCount()); // 4
