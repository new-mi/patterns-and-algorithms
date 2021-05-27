/*
Итератор — это поведенческий паттерн проектирования, который даёт возможность последовательно обходить элементы составных объектов, не раскрывая их внутреннего представления.

+
  Упрощает классы хранения данных.
  Позволяет реализовать различные способы обхода структуры данных.
  Позволяет одновременно перемещаться по структуре данных в разные стороны.

-
  Не оправдан, если можно обойтись простым циклом.
*/

class Iterator {
  constructor(elms) {
    this.index = 0
    this.keys = Object.keys(elms)
    this.elements = elms
  }
  next() {
    return this.elements[this.keys[this.index++]]
  }
  hasNext() {
    return this.index < this.keys.length
  }
}

// Example
const collections = new Iterator(['Audi', 'Tesla', 'Bmw', 'Mersedes'])

while (collections.hasNext()) {
  console.log(collections.next())
  /*
    Audi
    Tesla
    Bmw
    Mersedes
   */
}
const autos = {
  audi: {
    model: 'Audi',
    color: 'Black',
    price: 20000
  },
  bmw: {
    model: 'Bmw',
    color: 'Red',
    price: 30000
  },
  tesla: {
    model: 'Tesla',
    color: 'White',
    price: 40000
  }
}

const collections2 = new Iterator(autos)

while(collections2.hasNext()) {
  console.log(collections2.next())
  /*
    { model: 'Audi', color: 'Black', price: 20000 }
    { model: 'Bmw', color: 'Red', price: 30000 }
    { model: 'Tesla', color: 'White', price: 40000 }
   */
}
