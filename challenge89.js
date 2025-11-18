/**
 * Write a JavaScript program to find the sum of squares of a numerical vector.
 */

function sumOfSquares(arr) {
    let product = 1
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        product *= arr[i]
        
    }
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j]
    }
    console.log(`sum: ${sum}, product: ${product}`)
}
sumOfSquares([1,2,3,4,5])