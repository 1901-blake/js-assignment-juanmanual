/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
//object literal
let john = {
  name:"johnny b. boy", 
  age: NaN
}

//constructor person
function PersonA(name, age) {
  this.name = name
  this.age = age
}

//es6 class
class PersonB {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let jim = new PersonA("jim", 21)
let joe = new PersonB("joe", 30)

console.log(john)
console.log(jim)
console.log(joe)

