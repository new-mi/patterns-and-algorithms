/*
Строитель — это порождающий паттерн проектирования, который позволяет создавать сложные объекты пошагово. Строитель даёт возможность использовать один и тот же код строительства для получения разных представлений объектов.

+
  Позволяет создавать продукты пошагово.
  Позволяет использовать один и тот же код для создания различных продуктов.
  Изолирует сложный код сборки продукта от его основной бизнес-логики.

-
  Усложняет код программы из-за введения дополнительных классов.
  Клиент будет привязан к конкретным классам строителей, так как в интерфейсе директора может не быть метода получения результата.

Директор
Вы можете пойти дальше и выделить вызовы методов строителя в отдельный класс, называемый директором. В этом случае директор будет задавать порядок шагов строительства, а строитель — выполнять их.
*/

class Car {
  constructor() {
    this.autoPilot = false
    this.parktronic = false
    this.signaling = false
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car()
  }

  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot
    return this
  }

  addParktronic(parctronic) {
    this.car.parktronic = parctronic
    return this
  }

  addSignaling(signaling) {
    this.car.signaling = signaling
    return this
  }

  updateEngine(engine) {
    this.car.engine = engine
    return this
  }

  build() {
    return this.car
  }
}

class CarBuilderDirector {
  buildMaximumCompleteSet(carBuilder) {
    return carBuilder.addAutoPilot(true).addParktronic(true).addSignaling(true).updateEngine('V8').build()
  }
}

// Example
const myCar = new CarBuilder().build()
const myCar2 = new CarBuilder().addAutoPilot(true).addParktronic(true).updateEngine('V8').build()
const myCar3 = new CarBuilder().addSignaling(true).updateEngine('V4').build()

const myCarDirector = new CarBuilderDirector()
const carBuilder = new CarBuilder()
const myCar4 = myCarDirector.buildMaximumCompleteSet(carBuilder)

console.log(myCar)
/*
Car {
    autoPilot: false,
    parktronic: false,
    signaling: false
}
*/
console.log(myCar2)
/*
Car {
  autoPilot: true,
  parktronic: true,
  signaling: false,
  engine: 'V8'
}
*/
console.log(myCar3)
/*
Car {
  autoPilot: false,
  parktronic: false,
  signaling: true,
  engine: 'V4'
}
*/
console.log(myCar4)
/*
Car {
  autoPilot: true,
  parktronic: true,
  signaling: true,
  engine: 'V8'
}
*/
