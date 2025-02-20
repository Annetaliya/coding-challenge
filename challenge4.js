//Write a JavaScript function to get the first element of an array. Passing the parameter 'n' 
// will return the first 'n' elements of the array.

function first(array, n) {
    if (n == null) {
        return array[0]
    }
    if (n < 0) {
        return []
    }
    return array.slice(0,n)

    

}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));