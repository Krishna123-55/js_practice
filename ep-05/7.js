const array = [1, 3, 4, 455, 67];

function findMax(arr) {
    let max = arr[0]; // Start with the first element as the max
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max; // Return the maximum value found
}

console.log(findMax(array)); // Output: 455
