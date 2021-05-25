/*
Абстрактная фабрика — это порождающий паттерн проектирования, который позволяет создавать семейства связанных объектов, не привязываясь к конкретным классам создаваемых объектов.

+
  Гарантирует сочетаемость создаваемых продуктов.
  Избавляет клиентский код от привязки к конкретным классам продуктов.
  Выделяет код производства продуктов в одно место, упрощая поддержку кода.
  Упрощает добавление новых продуктов в программу.
  Реализует принцип открытости/закрытости.

-
  Усложняет код программы из-за введения множества дополнительных классов.
  Требует наличия всех типов продуктов в каждой вариации.
*/

// Abstract factory
function bmwProducer(kind) {
  return kind === 'sport' ? sportCarFactory : familyCarFactory
}

function sportCarFactory() {
  return new Z4()
}

function familyCarFactory() {
  return new I3()
}

class Z4 {
  info() {
    return 'Z4 is a Sport car!'
  }
}

class I3 {
  info() {
    return 'I3 is a Family car!'
  }
}


// Example
// Initializing Abstract factory of sport cars
const producer = bmwProducer('sport')
// Car producing (Factory)
const myCar = new producer()
console.log(myCar.info()); // Z4 is a Sport car!

// Initializing Abstract factory of family cars
const producer2 = bmwProducer()
// Car producing (Factory)
const myCar2 = new producer2()
console.log(myCar2.info()); // I3 is a Family car!
