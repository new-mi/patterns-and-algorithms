/*
Декоратор — это структурный паттерн проектирования, который позволяет динамически добавлять объектам новую функциональность, оборачивая их в полезные «обёртки».

+
  Большая гибкость, чем у наследования.
  Позволяет добавлять обязанности на лету.
  Можно добавлять несколько новых обязанностей сразу.
  Позволяет иметь несколько мелких объектов вместо одного объекта на все случаи жизни.

-
  Трудно конфигурировать многократно обёрнутые объекты.
  Обилие крошечных классов.
*/

class Car {
  constructor() {
    this.price = 10000
    this.model = 'Car'
  }

  getPrice() {
    return this.price
  }

  getDescription() {
    return this.model
  }
}

class Tesla extends Car {
  constructor() {
    super()
    this.price = 25000
    this.model = 'Tesla'
  }
}

class Audi extends Car {
  constructor() {
    super()
    this.price = 20000
    this.model = 'Audi'
  }
}

// Decorators
class Autopilot {
  constructor(car) {
    this.car = car
  }

  getPrice() {
    return this.car.getPrice() + 5000
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`
  }
}
class Parktronic {
  constructor(car) {
    this.car = car
  }

  getPrice() {
    return this.car.getPrice() + 3000
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`
  }
}

// Example
// Version Tesla with autopilot & parktronic
let tesla = new Tesla();
tesla = new Autopilot(tesla)
tesla = new Parktronic(tesla)

console.log(tesla.getPrice(), tesla.getDescription()); // 33000 Tesla with autopilot with parktronic

// Version Tesla with autopilot only
let tesla1 = new Tesla();
tesla1 = new Autopilot(tesla1)

console.log(tesla1.getPrice(), tesla1.getDescription()); // 30000 Tesla with autopilot

// Version Audi with autopilot only
let audi = new Audi()
audi = new Autopilot(audi)

console.log(audi.getPrice(), audi.getDescription()); // 25000 Audi with autopilot
