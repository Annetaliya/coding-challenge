/*

Leaders in an array
Last Updated : 17 Dec, 2024
Given an array arr[] of size n, the task is to find all the Leaders in the array. 
An element is a Leader if it is greater than or equal to all the elements to its right side.

Note: The rightmost element is always a leader.

Examples:

Input: arr[] = [16, 17, 4, 3, 5, 2]
Output: [17 5 2]
 */

function arrayLeader(arr) {
    const n = arr.length;
    let last = arr[n-1];
    let result = []

    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[i + 1]) {
            result.push(arr[i])
            i++
            
        }
    }
    const g = result.length;
    result[g] = last
    return result;
}
console.log(arrayLeader([1, 2, 3, 4, 5, 2]))