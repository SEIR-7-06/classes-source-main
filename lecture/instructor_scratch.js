// const pete = {
//   name: 'Pete Macaluso',
//   age: 31,
//   species: 'Homo Sapiens',
//   firstName() {
//     return this.name.split(' ')[0]
//   },
//   haveBirthday() {
//     this.age ++;
//     console.log('woohoo! free cake! party time!')
//   },
//   greet(otherPerson) {
//     console.log(`Hi ${other.firstName()}! My name's ${this.firstName()}`)
//   }
// }

// const amber = {
//   name: 'Amber Hogan',
//   age: 32,
//   species: 'Homo Sapiens',
//   firstName() {
//     return this.name.split(' ')[0]
//   },
//   haveBirthday() {
//     this.age++;
//     console.log('woohoo! free cake! party time!')
//   },
//   greet(otherPerson) {
//     console.log(`Hi ${otherPerson.firstName()}! I'm ${this.firstName()}`)
//   }
// }

// const shereef = {
//   name: 'Shereef Shehab',
//   age: 29,
//   species: 'Homo Sapiens',
//   firstName() {
//     return this.name.split(' ')[0]
//   },

//   haveBirthday() {
//     this.age++
//     console.log('wohho! free cake! party time!')
//   },

//   greet(otherPerson) {
//     console.log(`Hi ${otherPerson.firstName()}! I'm ${this.firstName()}`)
//   }
// }

// console.log(amber.age)
// amber.haveBirthday()
// console.log(amber.age)

// console.log(shereef.firstName())
// shereef.greet(pete)

// WRONG
// class Person(name, age) {}

class Person {
  static isValid() {
    return true
  }

  constructor(name, age) {
    // `this` refers to the instance of the Person that we are currently making
    this.name = name;
    this.age = age;
    this.species = 'Homo Sapiens';
  }

  firstName() {
    return this.name.split(' ')[0]
  }

  haveBirthday() {
    this.age ++;
    console.log('woohoo! free cake! party time!')
  }

  greet(otherPerson) {
    console.log(`Hi ${otherPerson.firstName()}! My name's ${this.firstName()}`)
  }
}

const pete = new Person('Pete Macaluso', 31)
const amber = new Person('Amber Hogan', 32)
const shereef = new Person('Shereef Shehab', 29)

console.log(pete.firstName())
console.log(shereef.age)
shereef.haveBirthday()
console.log(shereef.age)
console.log(pete.greet(amber))

// console.log(Person)
// console.log(typeof Person)

console.log(Person.isValid())

// Array.isArray('asdf') // false
// Array.isArray(['asdf']) // true





class Lawyer extends Person {
  constructor(name, age, graduatedFrom) {
    super(name)
    // this.name = name;
    // this.age = age;
    // this.species = "Homo Sapiens";
    this.graduatedFrom = graduatedFrom;
  }
  


  greet(otherPerson) {
    console.log(`Hi ${otherPerson.firstName()}! My name's ${this.firstName()}, OH BY THE WAY DID I MENTION I WENT TO ${this.graduatedFrom}`)
  }
}

const todd = new Lawyer('Todd FakeLastName', 37, 'Yale Law')
// console.log(todd.age)
// todd.haveBirthday()
// console.log(todd.age)

// console.log(todd)
// shereef.greet(todd)

console.log(todd.constructor)
console.log(todd.constructor.name)
console.log(amber.constructor)
console.log(amber.constructor.name)




console.log(todd instanceof Lawyer)
console.log(todd instanceof Person)
console.log(pete instanceof Lawyer)
console.log(pete instanceof Person)
console.log(pete instanceof Object)


console.log([] instanceof Object)

