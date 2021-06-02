/*
Наблюдатель — это поведенческий паттерн проектирования, который создаёт механизм подписки, позволяющий одним объектам следить и реагировать на события, происходящие в других объектах.

+
  Издатели не зависят от конкретных классов подписчиков и наоборот.
  Вы можете подписывать и отписывать получателей на лету.
  Реализует принцип открытости/закрытости.

-
  Подписчики оповещаются в случайном порядке.
*/

class AutoNews {
  constructor() {
    this.news = ''
    this.subscribers = {}
  }

  register(observer) {
    this.subscribers[observer.id] = observer
  }

  unregister(observerId) {
    delete this.subscribers[observerId]
  }

  notlifyAll() {
    Object.values(this.subscribers).forEach(subs => subs.inform(this))
  }

  setNews(text) {
    this.news = text
    this.notlifyAll()
  }
}

class Subscriber {
  constructor(name) {
    this.id = Math.random().toString(36).substring(7)
    this.name = name
  }

  inform(message) {
    console.log(`${this.name} has been informed about: ${message.news}`);
  }
}

// Example
const autoNews = new AutoNews()

const subscriberJack = new Subscriber('Jack')
const subscriberMax = new Subscriber('Max')

autoNews.register(subscriberJack)
autoNews.register(subscriberMax)

autoNews.setNews('New Tesla price is 40 000!')
/*
Jack has been informed about: New Tesla price is 40 000!
Max has been informed about: New Tesla price is 40 000!
*/

autoNews.unregister(subscriberMax.id)

autoNews.setNews('New Tesla price is 20 000!')
/*
Jack has been informed about: New Tesla price is 20 000!
*/
