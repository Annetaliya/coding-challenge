/**
 * Given an array of integers arr[] of size n, the task is to rotate 
 * the array elements to the left by d positions.
 * Input: arr[] = {1, 2, 3, 4, 5, 6}, d = 2
Output: {3, 4, 5, 6, 1, 2}
Explanation: After first left rotation, arr[] becomes {2, 3, 4, 5, 6, 1} 
and after the second rotation, arr[] becomes {3, 4, 5, 6, 1, 2}

Input: arr[] = {1, 2, 3}, d = 4
Output: {2, 3, 1}
Explanation: The array is rotated as follows:

After first left rotation, arr[] = {2, 3, 1}
After second left rotation, arr[] = {3, 1, 2}
After third left rotation, arr[] = {1, 2, 3}
After fourth left rotation, arr[] = {2, 3, 1}
 */

function leftRotateArray(arr, d) {
    while (d > 0) {
        let end = arr[0];
        const n = arr.length;

        for (let i = 1; i < n; i++) {
            arr[i - 1] = arr[i]
        }
        arr[n - 1] = end
        
        d--;
    }
    return arr
}
console.log(leftRotateArray([1, 2, 3, 4, 5, 6], 2))