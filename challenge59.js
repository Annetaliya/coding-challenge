/*
Given an array of integers arr[] of size n, the task is to rotate 
the array elements to the left by d positions.

Examples:

Input: arr[] = {1, 2, 3, 4, 5, 6}, d = 2
Output: {3, 4, 5, 6, 1, 2}
Explanation: After first left rotation, arr[] becomes {2, 3, 4, 5, 6, 1} 
and after the second rotation, arr[] becomes {3, 4, 5, 6, 1, 2}
 */

function rightRotate(arr, d) {
    const n = arr.length;
   

    while (d > 0) {
         let last = arr[0]
        for (let i = 0; i < n; i++){
            arr[i] = arr[i + 1]
        }
        
        arr[n - 1] = last
        d--;
    }
    
    return arr;
    
}
console.log(rightRotate([1, 2, 3, 4, 5, 6], 2))