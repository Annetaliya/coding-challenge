/* 
Given an integer array, find a maximum product of a triplet in the array.
*/

function maxProductOfTriplets(arr) {
    function tosort(a,b) {
        return b - a
    }
    arr.sort(tosort)
    let product = 1

    for (let i = 0; i < arr.length; i++) {
        if (i === 2) {
            break;
        }
        product = product * arr[i]

    } 
    return product
}
console.log(maxProductOfTriplets([10,7,2,3]))