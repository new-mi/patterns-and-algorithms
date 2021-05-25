/*
Мост — это структурный паттерн проектирования, который разделяет один или несколько классов на две отдельные иерархии — абстракцию и реализацию, позволяя изменять их независимо друг от друга.

+
  Позволяет строить платформо-независимые программы.
  Скрывает лишние или опасные детали реализации от клиентского кода.
  Реализует принцип открытости/закрытости.

-
  Усложняет код программы из-за введения дополнительных классов.
*/

class Model {
  constructor(color) {
    this.color = color
  }
}

class Color {
  constructor(typeColor) {
    this.typeColor = typeColor
  }
  get() {
    return this.typeColor
  }
}

class BlackColor extends Color {
  constructor() {
    super('dark-black');
  }
}

class SilverColor extends Color {
  constructor() {
    super('silver-metallic');
  }
}

class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`
  }
}

class Bmw extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`
  }
}

// Example
// We avoided creation of very specific class
// const blackBmw = new BlackColorBmw()

// Instead
const blackBmw = new Bmw(new BlackColor())
console.log(blackBmw.paint()) // Auto: Bmw, Color: dark-black

const silverAudi = new Audi(new SilverColor())
console.log(silverAudi.paint()) // Auto: Audi, Color: silver-metallic

