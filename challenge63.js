/*
Given an integer array arr[] and an integer ele the task is to the remove all 
occurrences of ele from arr[] in-place and return the number of elements which are not 
equal to ele. If there are k number of elements which are not equal to ele then the
 input array arr[] should be modified such that the first k elements should contain 
 the elements which are not equal to ele and then the remaining elements.

Note: The order of first k elements may be changed.
Input: arr[] = [3, 2, 2, 3], ele = 3
Output: 2
Explanation: The answer is 2 because there are 2 elements which are not equal to 
3 and arr[] will be modified such that the first 2 elements contain the elements 
which are not equal to 3 and remaining elements can contain any element. 
So, modified arr[] = [2, 2, _, _]
 */

function removeOccurenceInArray(arr, el) {
    const n = arr.length;
    let result = [];

    for (let i = 0; i < n; i++) {
        if (arr[i] !== el) {
            result.push(arr[i])
        }
    }
    return result.length
}
// second approach
function removeEl(arr, el) {
    const n = arr.length;
    let k = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] !== el) {
            arr[k] = arr[i];
            k++
        }
    }
    return k
}
console.log(removeEl([3, 2, 2, 3], 3))