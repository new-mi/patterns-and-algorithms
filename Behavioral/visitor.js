/*
Посетитель — это поведенческий паттерн проектирования, который позволяет добавлять в программу новые операции, не изменяя классы объектов, над которыми эти операции могут выполняться.

+
  Упрощает добавление операций, работающих со сложными структурами объектов.
  Объединяет родственные операции в одном классе.
  Посетитель может накапливать состояние при обходе структуры элементов.

-
  Паттерн не оправдан, если иерархия элементов часто меняется.
  Может привести к нарушению инкапсуляции элементов.
*/

class Accept {
  accept(visitor) {
    visitor(this)
  }
}

class Tesla extends Accept {
  info() {
    return 'It is a Tesla car!'
  }
}
class Bmw extends Accept {
  info() {
    return 'It is a Bmw car!'
  }
}
class Audi extends Accept {
  info() {
    return 'It is a Audi car!'
  }
}

function exportVisitor(auto) {
  if (auto instanceof Tesla) {
    console.log(`Data info: ${auto.info()}`);
  }
  if (auto instanceof Bmw) {
    console.log(`Data info: ${auto.info()}`);
  }
  if (auto instanceof Audi) {
    console.log(`Data info: ${auto.info()}`);
  }
}

// Example
const tesla = new Tesla()
const bmw = new Bmw()

tesla.accept(exportVisitor) // Data info: It is a Tesla car!
bmw.accept(exportVisitor) // Data info: It is a Bmw car!
