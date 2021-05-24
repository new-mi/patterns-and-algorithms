/*
Заместитель — это структурный паттерн проектирования, который позволяет подставлять вместо реальных объектов специальные объекты-заменители. Эти объекты перехватывают вызовы к оригинальному объекту, позволяя сделать что-то до или после передачи вызова оригиналу.

+
  Позволяет контролировать сервисный объект незаметно для клиента.
  Может работать, даже если сервисный объект ещё не создан.
  Может контролировать жизненный цикл служебного объекта.

-
  Усложняет код программы из-за введения дополнительных классов.
  Увеличивает время отклика от сервиса.
*/

class CarAccess {
  open() {
    console.log('Opening car door')
  }
  close() {
    console.log('Closing the car door')
  }
}

class SecuritySystem {
  constructor(door) {
    this.door = door
  }

  authenticate(pswd) {
    return pswd === 'sim sim'
  }

  open(pswd) {
    if (this.authenticate(pswd)) {
      this.door.open()
    } else {
      console.log('Access denied!')
    }
  }

  close() {
    this.door.close()
  }
}

// Example
const door = new SecuritySystem(new CarAccess())
door.open('sim slabim') // Access denied!
door.open('sim sim') // Opening car door
door.close() // Closing the car door
