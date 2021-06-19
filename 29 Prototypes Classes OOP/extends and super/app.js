class Pet {
  constructor (name, age) {
    console.log('IN PET CONSTRUCTOR!"')
    this.name = name;
    this.age = age;
  }
  eat() {
    return`${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9){
    console.log('IN CAT CONSTRUCTOR!')
    super(name, age)
    this.livesLeft = livesLeft;
  }
  meow() {
    return `${this.name} says MEOWWWWW!!`
  }
}

class Dog  extends Pet{
  woof() {
    return `${this.name} says WOOOOOOF!`
  }
  eat() {
    return `${this.name} scarfs his food!`
  }
}