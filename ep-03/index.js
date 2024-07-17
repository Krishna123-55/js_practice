//spread operators:
//object/array, too much used in function
// ...
//duplicate 

//Q.-1 - Merge two array
const num1 = [1,2,3,4,5];
const num2 = [6,7,8,9,10];

const result = [...num1, ...num2];
console.log(result);



//Object
//Q- merge to object
const obj1 = {
    a: 1,
    b: 2
};
const obj2 = {
    a: "Hello",
    b: "Krishna"
};

const res = {...obj1, ...obj2};
console.log(res);


//function
function sum(...numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sum(1,2,3,4,5,6));