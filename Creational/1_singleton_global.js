let instance;

class Counter {
  constructor() {
    if (!instance) instance = this
    instance.count = 0
    return instance
  }

  getCount() {
    return instance.count
  }

  increaseCount() {
    return instance.count++
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
