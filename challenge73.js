/**
 * Given an array of integers arr[] of size n, the task is to rotate 
 * the array elements to the left by d positions.
 * Input: arr[] = {1, 2, 3, 4, 5, 6}, d = 2
Output: {3, 4, 5, 6, 1, 2}
Explanation: After first left rotation, arr[] becomes {2, 3, 4, 5, 6, 1} 
and after the second rotation, arr[] becomes {3, 4, 5, 6, 1, 2}
 */

function leftRotate(arr, d) {

    while (d > 0) {
        let x = arr[0]
        const n = arr.length;
        for(let i = 1; i < arr.length; i++) {
            arr[i-1] = arr[i]
        }
        arr[n-1] = x
        d--;
    }
     return arr;

}
console.log(leftRotate([1, 2, 3, 4, 5, 6], 2))