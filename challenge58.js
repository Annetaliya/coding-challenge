/*
 Given an array arr[] and an integer k, find the array after 
 reversing every subarray of consecutive k elements in place. 
 If the last subarray has fewer than k elements, reverse it as it is.
  Modify the array in place, do not return anything.

Examples: 

Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], k = 3
Output: [3, 2, 1, 6, 5, 4, 8, 7]
*/

function reverseSubArr(arr,k) {
    const n = arr.length;
    
    for(let i = 0; i < n; i+= k) {
        let left = i;
        let right = Math.min(i + k - 1, n - 1)

        while( left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    return arr;
}
console.log(reverseSubArr([1, 2, 3, 4, 5, 6, 7, 8], 3))