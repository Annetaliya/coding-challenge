/* 
Write a JavaScript function to get the first element of an array. Passing the parameter 'n' 
will return the first 'n' elements of the array.
console.log(first([7, 9, 0, -2]));

console.log(first([],3));
7
[]
*/
function first(arr, n) {
    if (!n) {
        let b = arr.slice(0,1)
        return b;
    } else {
        b = arr.slice(0, n)
        return b
    }
}
console.log(first([7, 9, 0, -2],3))

function trancate(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!n) {
            result.push(arr[0])
            break;
        } else if (i  < n) {
            result.push(arr[i])

        }
    }
    return result
}
console.log(trancate([7, 9, 0, -2],3))
