/*
Снимок — это поведенческий паттерн проектирования, который позволяет сохранять и восстанавливать прошлые состояния объектов, не раскрывая подробностей их реализации.

+
  Не нарушает инкапсуляции исходного объекта.
  Упрощает структуру исходного объекта. Ему не нужно хранить историю версий своего состояния.

-
  Требует много памяти, если клиенты слишком часто создают снимки.
  Может повлечь дополнительные издержки памяти, если объекты, хранящие историю, не освобождают ресурсы, занятые устаревшими снимками.
  В некоторых языках (например, PHP, Python, JavaScript) сложно гарантировать, чтобы только исходный объект имел доступ к состоянию снимка.
*/

class Memento {
  constructor(value) {
    this.value = value
  }
}

const creator = {
  save: val => new Memento(val),
  restore: memento => memento.value
}

class Caretaker {
  constructor() {
    this.values = []
  }

  addMemento(memento) {
    this.values.push(memento)
  }

  getMemento(index) {
    return this.values[index]
  }
}

// Example
const careTaker = new Caretaker()

careTaker.addMemento(creator.save('hello'))
careTaker.addMemento(creator.save('hello world'))
careTaker.addMemento(creator.save('hello world world'))

console.log(creator.restore(careTaker.getMemento(1))); // hello world
