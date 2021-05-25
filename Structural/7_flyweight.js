/*
Легковес — это структурный паттерн проектирования, который позволяет вместить бóльшее количество объектов в отведённую оперативную память. Легковес экономит память, разделяя общее состояние объектов между собой, вместо хранения одинаковых данных в каждом объекте.

+
  Экономит оперативную память

-
  Расходует процессорное время на поиск/вычисление контекста.
  Усложняет код программы из-за введения множества дополнительных классов.
*/

class Auto {
  constructor(model) {
    this.model = model
  }
}

class AutoFactory {
  constructor() {
    this.models = {}
  }

  create(modelName) {
    let model = this.models[modelName]
    if (model) return model
    console.count('model')
    this.models[modelName] = new Auto(modelName)
    return this.models[modelName]
  }

  getModels() {
    console.table(this.models)
  }
}

// Example
const factory = new AutoFactory()

const bmw = factory.create('Bmw')
const audi = factory.create('Audi')
const tesla = factory.create('Tesla')
const blackTesla = factory.create('Tesla')

factory.getModels()
/*
model: 1
model: 2
model: 3
┌────────────┬──────────────┐
│  (index)   │    model     │
├────────────┼──────────────┤
│    Bmw     │    'Bmw'     │
│    Audi    │    'Audi'    │
│   Tesla    │   'Tesla'    │
└────────────┴──────────────┘
*/
