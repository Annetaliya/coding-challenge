/**
 * Given an array of positive integers arr[] of size n, the task
 *  is to find second largest distinct element in the array.

Note: If the second largest element does not exist, return -1.

Examples:

Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 
and the second largest element is 34.
 */

function findSecondLargest(arr) {
    function toSort(a,b) {
        return a-b;
    }
    arr.sort(toSort)
    const n = arr.length;
    let max = arr[n-1]
    for (let i = n-2; i >= 0; i--) {
        if (arr[i] != arr[n-1]) {
            return arr[i]
        }
    }
    return -1
}

console.log(findSecondLargest([10,10,5]))