/*
Посредник — это поведенческий паттерн проектирования, который позволяет уменьшить связанность множества классов между собой, благодаря перемещению этих связей в один класс-посредник.

+
  Устраняет зависимости между компонентами, позволяя повторно их использовать.
  Упрощает взаимодействие между компонентами.
  Централизует управление в одном месте.

-
  Посредник может сильно раздуться.
*/

class OfficialDealer {
  constructor() {
    this.customers = []
  }
  getCustomersList() {
    return this.customers
  }
  addToCustomersList(name) {
    this.customers.push(name)
  }
  orderAuto(customer, auto, info) {
    const name = customer.getName()

    console.log(`Order name: ${name}. Order auto is ${auto}`)
    console.log(`Additional info: ${info}`)
    this.addToCustomersList(name)
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name
    this.dealerMediator = dealerMediator
  }
  getName() {
    return this.name
  }
  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info)
  }
}

// Example
const mediator = new OfficialDealer()

const user = new Customer('User', mediator)
const user2 = new Customer('User2', mediator)

user.makeOrder('Tesla', 'With autopilot!')
/*
Order name: User. Order auto is Tesla
Additional info: With autopilot!
*/
user2.makeOrder('Audi', 'With parktronik!')
/*
Order name: User2. Order auto is Audi
Additional info: With parktronik!
*/
console.log(mediator.getCustomersList()) // [ 'User', 'User2' ]
