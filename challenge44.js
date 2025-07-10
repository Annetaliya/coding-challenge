/* 
Given an array of integers arr[] of size n, the task is to rotate the array elements 
to the left by d positions.

Examples:

Input: arr[] = {1, 2, 3, 4, 5, 6}, d = 2
Output: {3, 4, 5, 6, 1, 2}
*/

function leftRotation(arr,n) {
    while (n > 0) {

        let first = arr[0];
        let len = arr.length;

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i + 1] 
        }
           arr[len - 1] = first;
    n--;
    }
}
const arr = [1, 2, 3, 4, 5, 6]
leftRotation(arr, 2)
console.log(arr)