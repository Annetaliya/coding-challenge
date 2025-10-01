/**
 * Given an array arr[] and an integer k, find the array after reversing
 *  every subarray of consecutive k elements in place.
 *  If the last subarray has fewer than k elements, reverse it as it is.
 *  Modify the array in place, do not return anything.
 */

function reverseSubGroups (arr, k) {
    const result = []

    for (let i = 0; i < arr.length; i += k) {

        let end = Math.min(i + k -1, arr.length -1)
        for (let j = end; j >= i; j--) {
            result.push(arr[j])
        }

    }
    return result;

}
console.log(reverseSubGroups([1, 2, 3, 4, 5, 6, 7, 8], 3))