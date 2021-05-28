/*
Команда — это поведенческий паттерн проектирования, который превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов, ставить запросы в очередь, логировать их, а также поддерживать отмену операций.

+
  Убирает прямую зависимость между объектами, вызывающими операции, и объектами, которые их непосредственно выполняют.
  Позволяет реализовать простую отмену и повтор операций.
  Позволяет реализовать отложенный запуск операций.
  Позволяет собирать сложные команды из простых.
  Реализует принцип открытости/закрытости.

-
  Усложняет код программы из-за введения множества дополнительных классов.
*/

class Driver {
  constructor(command) {
    this.command = command
  }

  execute() {
    this.command.execute()
  }
}

class Engine {
  constructor() {
    this.state = false
  }
  on() {
    this.state = true
  }
  off() {
    this.state = false
  }
}

class OnStartCommand {
  constructor(engine) {
    this.engine = engine
  }

  execute() {
    this.engine.on()
  }
}

class onSwitchOffCommand {
  constructor(engine) {
    this.engine = engine
  }

  execute() {
    this.engine.off()
  }
}

// Example
// Check engine status
const engine = new Engine()
console.log(engine) // Engine { state: false }

// Start Engine
const onStartCommand = new OnStartCommand(engine)
const driver = new Driver(onStartCommand)
driver.execute()

console.log(engine) // Engine { state: true }


