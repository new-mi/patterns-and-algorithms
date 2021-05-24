/*
Фабричный метод — это порождающий паттерн проектирования, который определяет общий интерфейс для создания объектов в суперклассе, позволяя подклассам изменять тип создаваемых объектов.

+
  Избавляет класс от привязки к конкретным классам продуктов.
  Выделяет код производства продуктов в одно место, упрощая поддержку кода.
  Упрощает добавление новых продуктов в программу.
  Реализует принцип открытости/закрытости.

-
  Может привести к созданию больших параллельных иерархий классов, так как для каждого класса продукта надо создать свой подкласс создателя.
*/

class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model
    this.price = price
    this.maxSpeed = maxSpeed
  }
}

class BmwFactory {
  create(type) {
    if (type === 'X5') {
      return new Bmw(type, 108000, 300)
    }
    if (type === 'X6') {
      return new Bmw(type, 111000, 320)
    }
  }
}

const factory = new BmwFactory()

const x5 = factory.create('X5')
const x6 = factory.create('X6')

console.log(x5); // Bmw { model: 'X5', price: 108000, maxSpeed: 300 }
console.log(x6); // Bmw { model: 'X6', price: 111000, maxSpeed: 320 }
