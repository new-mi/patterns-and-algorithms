/*
Прототип — это порождающий паттерн проектирования, который позволяет копировать объекты, не вдаваясь в подробности их реализации.

+
  Позволяет клонировать объекты, не привязываясь к их конкретным классам.
  Меньше повторяющегося кода инициализации объектов.
  Ускоряет создание объектов.
  Альтернатива созданию подклассов для конструирования сложных объектов.

-
  Сложно клонировать составные объекты, имеющие ссылки на другие объекты.
*/

class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model
    this.price = price
    this.interior = interior
    this.autopilot = autopilot
  }

  producer() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot)
  }
}

// Example
// Produce base auto
const prototypeCar = new TeslaCar('S', 80000, 'balck', false)

// Cloning of base auto
const car1 = prototypeCar.producer()
const car2 = prototypeCar.producer()
const car3 = prototypeCar.producer()

// Changes for particular auto
car1.interior = 'white'
car1.autopilot = true

console.log(prototypeCar)
/*
TeslaCar {
  model: 'S',
  price: 80000,
  interior: 'balck',
  autopilot: false
}
*/
console.log(car1)
/*
TeslaCar {
  model: 'S',
  price: 80000,
  interior: 'white',
  autopilot: true
}
 */
console.log(car2)
/*
TeslaCar {
  model: 'S',
  price: 80000,
  interior: 'balck',
  autopilot: false
}
*/
console.log(car3)
/*
TeslaCar {
  model: 'S',
  price: 80000,
  interior: 'balck',
  autopilot: false
}
*/
