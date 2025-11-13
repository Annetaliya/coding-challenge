/**
 * console.log(array_Clone([1, 2, 4, 0]));

console.log(array_Clone([1, 2, [4, 0]]));

[1, 2, 4, 0]

[1, 2, [4, 0]]
 */

function arrayClone(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++ ) {
        result.push(arr[i])
    }
    return result

}
console.log(arrayClone([1, 2, [4, 0]]));

