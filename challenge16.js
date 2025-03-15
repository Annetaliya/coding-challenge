/* Write a function filterRange(arr, a, b) that gets an array arr, 
looks for elements with values higher or equal to a and lower or equal to b and return a result 
as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)*/

function filterRange(arr, a, b) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] > a || arr[i] === a) && (arr[i] < b || arr[i] === b)) {
            newArr.push(arr[i])
        }
    }
    return newArr;

}
console.log(filterRange([5, 3, 8, 1], 1, 4))