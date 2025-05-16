/* Write a JavaScript function to find an array containing a specific element.

Test data :
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
[True]  */

function contains(array, element) {
    if (array.includes(element)) {
        return true
    }
}
function findElement(array, element) {
    return array.includes(element)
}

function isPresent(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return true
        } 
    }
    return false
}
console.log(isPresent([2, 5, 9, 6], 5))