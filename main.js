
  class Person {
    constructor(first,last) {
        this.firstName = first
        this.lastName = last
    }


get fullName () {
    return `${this.firstName} ${this.lastName}`
}

set _nickName(name) {
    this.nickName = name
}
}

const john = new Person("John", "Wood")

console.log(john.fullName)

john.nickName = "Johnny"

console.log(john.nickName)


class ClassCar {
  drive () {
    console.log('Vroom!');
  }
}

const car1 = new ClassCar();
console.log(car1.drive());


// constructor
function ConstructorCar () {}

ConstructorCar.prototype.drive = function () {
  console.log('Vroom!');
};

const car2 = new ConstructorCar();
console.log(car2.drive());


// factory
const proto = {
  drive () {
    console.log('Vroom!');
  }
};

function factoryCar () {
  return Object.create(proto);
}

const car3 = factoryCar();
console.log(car3.drive());


class childCare { 
  constructor(child,mom) {
    this.child = child
    this.mom = mom 
  }
  
  change() {
    console.log(this.child + 'pooped their pants');
  }
}

class kid extends childCare {
  constructor(child, mom) {
    super(child, mom); // call the super class constructor and pass in the child parameter
  }
 

  change() {
    console.log(this.child + ' had their diaper changed' + ' by' + ` ${this.mom}`);
  }
}

let careGiver = new kid('Johnny', 'Ericka');
careGiver.change();




