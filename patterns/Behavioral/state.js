/*
Состояние — это поведенческий паттерн проектирования, который позволяет объектам менять поведение в зависимости от своего состояния. Извне создаётся впечатление, что изменился класс объекта.

+
  Избавляет от множества больших условных операторов машины состояний.
  Концентрирует в одном месте код, связанный с определённым состоянием.
  Упрощает код контекста.

-
  Может неоправданно усложнить код, если состояний мало и они редко меняются.
*/

class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name
    this.nextStatus = nextStatus
  }

  next() {
    return new this.nextStatus()
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping)
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delivered)
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('delivered', Delivered)
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next()
  }

  cancelOrder() {
    this.state.name === 'waitingForPayment' ?
      console.log('Order is canceled') :
      console.log('Order ca not be canceled');
  }
}

// Example
const myOrder = new Order();

console.log(myOrder.state.name); // waitingForPayment

myOrder.cancelOrder() // Order is canceled

myOrder.nextState()
console.log(myOrder.state.name); // shipping

myOrder.cancelOrder() // Order ca not be canceled

myOrder.nextState()
console.log(myOrder.state.name); // delivered
