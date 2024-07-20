//Array (map, filter, reduce)

const arr = [10,20,30, "Hello"];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

//map

const newArr = arr.map(function(element){
    console.log(element);
});