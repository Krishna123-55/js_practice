// destructuring in object and array

const arr = [1,2,3,4,5];

const [a,b,c,d,e] = arr;
console.log(e);

//object destructuring
const person = {
    name:"Krishna",
    age:23,
    gender:"male",
    location:"Maharashtra",
};

//access value

//dot notation
console.log(person.gender);

//bracket notation
console.log(person["age"]);

//destructuring
const {gender, name, location, age} = person;
console.log(gender);
console.log(name);
console.log(age);
console.log(location);