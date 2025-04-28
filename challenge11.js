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
console.log(findElement([2, 5, 9, 6], 3))