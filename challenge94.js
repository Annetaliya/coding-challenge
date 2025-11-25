/**
 * Given an integer array, find a maximum product of a triplet in the array.
 * Examples: 

Input:  arr[ ] = [10, 3, 5, 6, 20]
Output: 1200
Explanation: Multiplication of 10, 6 and 20

Input:  arr[ ] =  [-10, -3, -5, -6, -20]
Output: -90

Input: arr[ ] =  [1, -4, 3, -6, 7, 0]
Output: 168
 */

function findMaxTriplets(arr) {
    const n = arr.length;
    function toSort(a,b) {
        return a - b;
    }

    arr.sort(toSort)

    let max = Math.max((arr[0] *arr[1] * arr[n-1]), (arr[n-1] * arr[n - 2] * arr[n - 3]))
    return max

}
console.log(findMaxTriplets([-10, -3, -5, -6, -20]))