/*
Стратегия — это поведенческий паттерн проектирования, который определяет семейство схожих алгоритмов и помещает каждый из них в собственный класс, после чего алгоритмы можно взаимозаменять прямо во время исполнения программы.

+
  Горячая замена алгоритмов на лету.
  Изолирует код и данные алгоритмов от остальных классов.
  Уход от наследования к делегированию.
  Реализует принцип открытости/закрытости.

-
  Усложняет программу за счёт дополнительных классов.
  Клиент должен знать, в чём состоит разница между стратегиями, чтобы выбрать подходящую.
*/

function baseStrategy(amount) {
  return amount;
}

function premiumStrategy(amount) {
  return amount * 0.85;
}

function platinumStrategy(amount) {
  return amount * 0.65;
}

class AutoCart {
  constructor(discount) {
    this.discount = discount
    this.amount = 0
  }

  checkout() {
    return this.discount(this.amount)
  }
  setAmount(amount) {
    this.amount = amount
  }
}

// Example
const baseCustomer = new AutoCart(baseStrategy)
const premiumCustomer = new AutoCart(premiumStrategy)
const platinumCustomer = new AutoCart(platinumStrategy)

baseCustomer.setAmount(50000)
console.log(baseCustomer.checkout()) // 50000

premiumCustomer.setAmount(50000)
console.log(premiumCustomer.checkout()) // 42500

platinumCustomer.setAmount(50000)
console.log(platinumCustomer.checkout()) // 32500
