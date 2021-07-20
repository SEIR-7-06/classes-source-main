// console.log("is this working? happy Monday!")

const myFridge = {
  color: 'white',
  weight: 800,
  doorIsOpen: false,
  openDoor() {
      this.doorIsOpen = true
  },
  closeDoor(){
      this.doorIsOpen = false
  }
}

const joel = {
  name: 'Joel Hughes',
  species: 'Homo Sapiens',
  age: 99,
  favoriteFood: 'pizza',
  haveBirthday() {
      this.age++;
      console.log("woohoo! free cake!")
  }, 
  greet(otherPerson){
      console.log(`Hi ${otherPerson}! My name is ${this.name}`)
  }
};

// class Person {

// };

// const me = new Person();
// const bob = new Person();
// console.log(me);
// console.log(bob);
// console.log(typeof(me));
// console.log(typeof(bob))

// class Person {
//     greet(){
//         console.log('hi!')
//     }
// };

// const me = new Person();
// me.greet();

// class Person {
//     greet(){
//         console.log('hi!')
//     }
//     jump(){
//         console.log('weee!')
//     }
// };

// const me = new Person();
// me.greet();
// me.jump();


// class Person {
//     constructor(){
//         this.legs = 2;
//         this.arms = 2; 
//         this.eyes = 'brown';
//         this.hair = 'blonde';
//     }
//     greet(){
//         console.log('hi!')
//     }
//     jump(){
//         console.log('weee!')
//     }
// };

// const somebody = new Person();
// console.log(somebody);
// console.log(somebody.legs);
// somebody.eyes = 'blue';
// console.log(somebody);


// class Person {
//     constructor(name, age, eyes, hair){
//         this.legs = 2;
//         this.arms = 2; 
//         this.name = name;
//         this.age = age; 
//         this.eyes = eyes; 
//         this.hair = hair
//     }
//     greet(){
//         console.log('hi!')
//     }
//     jump(){
//         console.log('weee!')
//     }
// };

// const somebody = new Person('Susie', 55, 'brown', 'red');
// console.log(somebody);

// class Person {
//     constructor(name, age, eyes, hair){
//         this.legs = 2;
//         this.arms = 2; 
//         this.name = name;
//         this.age = age; 
//         this.eyes = eyes; 
//         this.hair = hair
//     }
//     greet(){
//         console.log('hi!')
//     }
//     jump(){
//         console.log('weee!')
//     }
//     setHair(hairColor){
//         this.hair = hairColor
//     }
// };

// const somebody = new Person('Jerry', 76, 'green', 'silver');
// console.log(somebody);
// somebody.setHair('black');
// console.log(somebody);


// class ChildClass extends ParentClass{
//     // additional behaviors here
// }

// class Person {
//     constructor(name, age, eyes, hair){
//         this.legs = 2;
//         this.arms = 2; 
//         this.name = name;
//         this.age = age; 
//         this.eyes = eyes; 
//         this.hair = hair
//     }
//     greet(){
//         console.log('hi!')
//     }
//     jump(){
//         console.log('weee!')
//     }
//     setHair(hairColor){
//         this.hair = hairColor
//     }
// };

// class Hero extends Person {

// };

// const spiderman = new Hero('Peter Parker', 16, 'blue', 'brown');
// console.log(spiderman);

// class Person {
//     constructor(name, age, eyes, hair){
//         this.legs = 2;
//         this.arms = 2; 
//         this.name = name;
//         this.age = age; 
//         this.eyes = eyes; 
//         this.hair = hair
//     }
//     greet(){
//         console.log('hi!')
//     }
//     jump(){
//         console.log('weee!')
//     }
//     setHair(hairColor){
//         this.hair = hairColor
//     }
// };

// class Hero extends Person {
//     climb(){
//         console.log('I can scale the side of a building!');
//     }
// };

// const spiderman = new Hero('Peter Parker', 16, 'blue', 'brown');
// console.log(spiderman);
// spiderman.climb();
// const regularPerson = new Person('Ordinary Guy', 50, 'brown', 'brown');
// regularPerson.climb(); // throws an error

// Child class can override a functionality from the Parent class
// class Person {
//     constructor(name, age, eyes, hair){
//         this.legs = 2;
//         this.arms = 2; 
//         this.name = name;
//         this.age = age; 
//         this.eyes = eyes; 
//         this.hair = hair
//     }
//     greet(){
//         console.log('hi!')
//     }
//     jump(){
//         console.log('weee!')
//     }
//     setHair(hairColor){
//         this.hair = hairColor
//     }
// };

// class Hero extends Person {
//     climb(){
//         console.log('I can scale the side of a building!');
//     }
//     greet(){
//         console.log("hi there, i have special powers!")
//     }
// };

// const spiderman = new Hero('Peter Parker', 16, 'blue', 'brown');
// spiderman.greet();

// class Person {
//     constructor(name, age, eyes, hair){
//         this.legs = 2;
//         this.arms = 2; 
//         this.name = name;
//         this.age = age; 
//         this.eyes = eyes; 
//         this.hair = hair
//     }
//     static eyeColors(){
//         return ['blue', 'green', 'brown', 'hazel']
//     }
//     greet(){
//         console.log('hi!')
//     }
//     jump(){
//         console.log('weee!')
//     }
//     setHair(hairColor){
//         this.hair = hairColor
//     }
// };

// class Hero extends Person {
//     constructor(name, age, eyes, hair, costumeColor){
//         super(name, age, eyes, hair, costumeColor);
//         this.powers = ['flight', 'superhuman strength', 'x-ray vision']
//     }

//     climb(){
//         console.log('I can scale the side of a building!');
//     }
//     greet(){
//         console.log("hi there, i have special powers!")
//     }
//     doubleAction(){
//         this.climb();
//         super.jump();
//     }
// };

// const spiderman = new Hero('Peter Parker', 16, 'blue', 'brown');
// spiderman.doubleAction();

// const justJoel = new Person('Joel', 99, 'brown', 'brown', 'red');
// console.log(justJoel)

// Let's create a "factory" object
// It will be a "singleton"

// class Car {
//     constructor(serialNumber){
//         this.serialNumber = serialNumber;
//     }
//     drive(){
//         console.log('Vroom')
//     }
// }

// const factory = {
//     cars: [],
//     generateCar(){
//         const newCar = new Car(this.cars.length);
//         this.cars.push(newCar);
//         return newCar;
//     },
//     findCar(index){
//         return this.cars[index]
//     }
// }

// factory.generateCar();
// factory.generateCar();
// console.log(factory);
// console.log(factory.findCar(1));

// You can also have a factory that is an instantiation of a class (rather than a factory that is a singleton object)

class Car {
  constructor(maker, serialNumber){
      this.maker = maker;
      this.serialNumber = serialNumber;
  }
  drive(){
      console.log('Vroom');
  }
}

class AutoPlant {
  constructor(maker){
      this.maker = maker;
      this.cars = [];
  }
  generateCar(){
      const newCar = new Car(this.maker, this.cars.length)
      this.cars.push(newCar);
      return newCar;
  }
  findCar(index){
      return this.cars[index];
  }
}

const toyotaPlant = new AutoPlant("Toyota");
const bmwPlant = new AutoPlant("BMW");
toyotaPlant.generateCar();
console.log(toyotaPlant);
console.log(toyotaPlant.findCar)