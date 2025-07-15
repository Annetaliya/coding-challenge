/*
Given an sorted array arr[] of integers, rearrange the elements into a wave-like array.
 An array arr[0..n-1] is said to be in wave form 
if it follows the pattern arr[0] ≥ arr[1] ≤ arr[2] ≥ arr[3] ≤ arr[4] ≥

The given array is sorted in ascending order, and modify the given array in-place 
without returning a new array.

Input: arr[] = [1, 2, 3, 4, 5]
Output: [2, 1, 4, 3, 5]
Explanation: Array elements after sorting it in the waveform are 2, 1, 4, 3, 5.
 */

function waveArray(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        
            let temp = arr[i];
            arr[i] = arr[i+ 1];
            arr[i + 1] = temp;
        
        
    }

}
const array = [1, 2, 3, 4, 5, 6];
waveArray(array)
console.log(array)