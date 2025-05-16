/* 
Write a JavaScript function to get the last element of an array.
 Passing the parameter 'n' will return the last 'n' elements of the array.

Test Data :

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]
*/

function last(arr, n) {
    let result = [];
    if (!n) {
        result = arr.pop();
        return result;
    }
    for (let i = 0; i < arr.length; i++) {
        if (i < n) {
            result.push(arr[i])
            
        }

    }
    return result;
}
console.log(last([7, 9, 0, -2],3));