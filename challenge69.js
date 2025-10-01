/**
 * Given an array of positive integers arr[] of size n, the
 *  task is to find second largest distinct element in the array.
 * Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.

Input: arr[] = [10, 5, 10]
Output: 5
Explanation: The largest element of the array is 10 and the second largest element is 5.

Input: arr[] = [10, 10, 10]
Output: -1
Explanation: The largest element of the array is 10 there is no second largest element.

Note: If the second largest element does not exist, return -1.
 */

function secondLargest(arr) {
    function toSort(a,b) {
        return a - b;
    }
    arr.sort(toSort);
    const n = arr.length;
    const largest = arr[n-1];

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] < largest) {
            return arr[i]
        }
    }
    return -1
    


}

console.log(secondLargest([12, 35, 1, 10, 34, 1]))