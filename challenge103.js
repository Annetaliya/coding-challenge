/**
 * Write a JavaScript function to clone an array.

Test Data :Data structure courses

console.log(array_Clone([1, 2, 4, 0]));

console.log(array_Clone([1, 2, [4, 0]]));

[1, 2, 4, 0]

[1, 2, [4, 0]]
 */

function cloneArray(arr) {
    const result = []

    for (let item of arr) {
        result.push(item)
    }
    return result
}

console.log(cloneArray([1,2,3,4]))