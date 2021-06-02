/*
Шаблонный метод — это поведенческий паттерн проектирования, который определяет скелет алгоритма, перекладывая ответственность за некоторые его шаги на подклассы. Паттерн позволяет подклассам переопределять шаги алгоритма, не меняя его общей структуры.

+
  Облегчает повторное использование кода.

-
  Вы жёстко ограничены скелетом существующего алгоритма.
  Вы можете нарушить принцип подстановки Барбары Лисков, изменяя базовое поведение одного из шагов алгоритма через подкласс.
  С ростом количества шагов шаблонный метод становится слишком сложно поддерживать.
*/

class Builder {
  build() {
    this.addEngine()
    this.installChassis()
    this.addElectronic()
    this.collectAccessories()
  }
}

class TeslaBuilder extends Builder {
  addEngine() {
    console.log('Add Electronic Engine');
  }
  installChassis() {
    console.log('Install Tesla chassis');
  }
  addElectronic() {
    console.log('Add special electronic');
  }
  collectAccessories() {
    console.log('Collect Accessories');
  }
}

class BmwBuilder extends Builder {
  addEngine() {
    console.log('Add BMW Engine');
  }
  installChassis() {
    console.log('Install BMW chassis');
  }
  addElectronic() {
    console.log('Add electronic');
  }
  collectAccessories() {
    console.log('Collect Accessories');
  }
}

// Example
const teslaBuilder = new TeslaBuilder()
const bmwBuilder = new BmwBuilder()

teslaBuilder.build()
/*
Add Electronic Engine
Install Tesla chassis
Add special electronic
Collect Accessories
*/
bmwBuilder.build()
/*
Add BMW Engine
Install BMW chassis
Add electronic
Collect Accessories
*/
