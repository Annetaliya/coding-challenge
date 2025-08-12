/*
Given an integer array, find a maximum product of a triplet in the array.
Input:  arr[ ] = [10, 3, 5, 6, 20]
Output: 1200
Explanation: Multiplication of 10, 6 and 20

Input:  arr[ ] =  [-10, -3, -5, -6, -20]
Output: -90
 */

function findMaxTriplet(arr) {
    if (arr.length < 3) {
        return 'Array is too short'
    }

    function toSort(a,b) {
        return a-b
    }
    arr.sort(toSort)
    const n = arr.length;
   let product1 = arr[n-1] * arr[n-2] * arr[n-3]
   let product2 = arr[0] * arr[1] * arr[n-1]
   let max = Math.max(product1, product2)
   return max;

}
console.log(findMaxTriplet([1, -4, 3, -6, 7, 0]))