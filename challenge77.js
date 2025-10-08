/**
 * Given a sorted array arr[] of integers (in ascending order),
 *  rearrange the elements in-place to form a wave-like array.
An array is said to be in wave form if it satisfies the following pattern:
 arr[0] ≥ arr[1] ≤ arr[2] ≥ arr[3] ≤ arr[4] ≥ ...
In other words, every even-indexed element should be
 greater than or equal to its adjacent odd-indexed elements (if they exist).

Note: The given array is sorted in ascending order,
 and modify the given array in-place without returning a new array.
 Input: arr[] = [1, 2, 3, 4, 5]
Output: [2, 1, 4, 3, 5]
 */

function waveArray(arr) {

    for(let i = 0; i < arr.length; i+=2) {
        if (arr[i] < arr[i+1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp;
        }
    }
    return arr
}
console.log(waveArray([1, 2, 3, 4, 5]))