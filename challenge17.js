/* Write a JavaScript function to clone an array.

Test Data :

console.log(array_Clone([1, 2, 4, 0]));

console.log(array_Clone([1, 2, [4, 0]]));

[1, 2, 4, 0]

[1, 2, [4, 0]]*/

function arrayClone(array) {
    let neArray = [];

    for (let i = 0; i < array.length; i++) {
        neArray.push(array[i])
    }

    return neArray
}

console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));