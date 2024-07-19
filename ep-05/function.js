//function declaration
function sum(num1, num2) {
    console.log(num1+num2);
}

sum(100, 200); //call


// Function expression

const sumofTwoNumber = function (num1, num2) {
    console.log(num1+num2);
};

sumofTwoNumber(1,2)



//

const doSomething = function(callback) {
    console.log("samose ban rahe hai...");
    setTimeout(function(){callback();
    }, 3000);
}

const callback = function() {
    console.log("samose ready hai");
}

doSomething(callback);

//interview mostly asked queston -
// what is anonymus function - 
//a function without name that is called a function.