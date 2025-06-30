/* 
Given an array of positive integers arr[] of size n, the task is to find second largest distinct
 element in the array.

Note: If the second largest element does not exist, return -1.

Examples:

Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.
*/

function findSecondLargestElement(arr) {
    let max = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    const index = arr.indexOf(max)
    const results = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === max) {
            continue
        }
        results.push(arr[i])

    }
    let secondLargest = 0
    for (let i = 0; i <results.length; i++) {
        if (results[i] > secondLargest) {
            secondLargest = results[i]
        }
    }
    return secondLargest;
}
console.log(findSecondLargestElement([12, 35, 1, 10, 34, 1]))