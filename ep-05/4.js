
const obj = {
    username: "shoes",
    price: 44
}
function myObj(whichObj){
    return `The Username is ${whichObj.username} and its price is ${whichObj.price}`
}
console.log(myObj(obj))