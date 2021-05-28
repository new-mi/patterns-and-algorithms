/*
Фасад — это структурный паттерн проектирования, который предоставляет простой интерфейс к сложной системе классов, библиотеке или фреймворку.

+
  Изолирует клиентов от компонентов сложной подсистемы.

-
  Фасад рискует стать божественным объектом(антипаттерн объектно-ориентированного программирования, описывающий объект, который хранит в себе «слишком много» или делает «слишком много»), привязанным ко всем классам программы.
*/

class Conveyor {
  setbody() {
    console.log('Body set!');
  }
  getEngine() {
    console.log('Dismantle Engine!');
  }
  setEngine() {
    console.log('Engine set!');
  }
  setInterior() {
    console.log('Exterior added!');
  }
  getInterior() {
    console.log('Update interior!');
  }
  setExterior() {
    console.log('Added interior!');
  }
  setWheels() {
    console.log('Wheels!');
  }
  addElectronics() {
    console.log('Added electronics!');
  }
  paint() {
    console.log('Car painted!');
  }
}

class ConveyorFacade {
  constructor(conveyor) {
    this.conveyor = conveyor
  }

  assembleCar() {
    this.conveyor.setbody()
    this.conveyor.setEngine()
    this.conveyor.setInterior()
    this.conveyor.setExterior()
    this.conveyor.setWheels()
    this.conveyor.addElectronics()
    this.conveyor.paint()
  }

  changeEngine() {
    this.conveyor.getEngine()
    this.conveyor.setEngine()
  }

  changeInterior() {
    this.conveyor.getInterior()
    this.conveyor.setInterior()
  }
}

// Example
const conveyor = new ConveyorFacade(new Conveyor())
let car = conveyor.assembleCar()
car = conveyor.changeEngine()
car = conveyor.changeInterior()

console.log(car);
/*
Body set!
Engine set!
Exterior added!
Added interior!
Wheels!
Added electronics!
Car painted!
Dismantle Engine!
Engine set!
Update interior!
Exterior added!
*/
