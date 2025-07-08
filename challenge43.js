/*
Given an array arr[] and an integer k, find the array after reversing every 
subarray of consecutive k elements in place. If the last subarray has fewer than k elements,
 reverse it as it is. Modify the array in place, do not return anything.

Examples: 

Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], k = 3
Output: [3, 2, 1, 6, 5, 4, 8, 7]
Explanation: Elements is reversed: [1, 2, 3] → [3, 2, 1], [4, 5, 6] → [6, 5, 4], 
and the last group [7, 8](size < 3) is reversed as [8, 7].  
*/

function reverseSubArr(arr, k) {
    
  for (let i = 0; i < arr.length; i + k) {
   let left = i;
   let right = Math.min(i + k, arr.length - 1)

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--
    }
  }
 
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
reverseSubArr(arr, 3);
console.log(arr);