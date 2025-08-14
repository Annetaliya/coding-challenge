/*
Given an array of integers arr[], move all the zeros to the end of the array 
while maintaining the relative order of all non-zero elements.

Examples: 

Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
Output: [1, 2, 4, 3, 5, 0, 0, 0]
Explanation: There are three 0s that are moved to the end.

Input: arr[] = [10, 20, 30]
Output: [10, 20, 30]
Explanation: No change in array as there are no 0s.
 */
function moveZeros(arr) {
    const n = arr.length;
    let result = [];
    let zeroCount = 0

    for (let i = 0; i < n; i++){
        if (arr[i] !== 0) {
            result.push(arr[i])
        } else {
            zeroCount++
        }
    }

    while (zeroCount > 0) {
        result.push(0)
        zeroCount--;
    }
    return result;
}
console.log(moveZeros([1, 2, 0, 4, 3, 0, 5, 0]))