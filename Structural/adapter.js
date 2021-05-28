/*
Адаптер — это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.

+
  Отделяет и скрывает от клиента подробности преобразования различных интерфейсов.

-
  Усложняет код программы из-за введения дополнительных классов.
*/

class Engine2 {
  simpleInterface() {
    console.log('Engine 2.0 - tr-tr-tr');
  }
}

class EngineV8 {
  complecatedInterface() {
    console.log('Engine V8 - wroom-wroom');
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine
  }

  simpleInterface() {
    this.engine.complecatedInterface()
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface()
  }
}

// Example
const myCar = new Auto()
// Engine 2.0
myCar.startEngine(new Engine2()) // Engine 2.0 - tr-tr-tr
// Engine V8 with Adapter
myCar.startEngine(new EngineV8Adapter(new EngineV8())) // Engine V8 - wroom-wroom
// Engine V8 without Adapter
myCar.startEngine(new EngineV8()) // ERROR
