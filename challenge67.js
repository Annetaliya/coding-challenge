/*
Given an unsorted array arr[] of size n, containing elements from the range 
1 to n, it is known that one number in this range is missing, and another 
number occurs twice in the array, find both the duplicate number and 
the missing number.
Input: arr[] = [3, 1, 3]
Output: [3, 2]
Explanation: 3 is occurs twice and 2 is missing.

Input: arr[] = [4, 3, 6, 2, 1, 1]
Output: [1, 5] 
Explanation: 1 is occurs twice and 5 is missing.
 */

function missingAndRepeatingElements(arr) {
    const n = arr.length;
    let missing = 0
    let result = []

    function toSort(a, b) {
        return a - b
    }
    arr.sort(toSort)

    for (let i = 0; i < n; i++) {
        if (arr[i + 1] - arr[i] > 1) {
            missing = arr[i + 1] - 1
        }
        for (let j = i + 1; j < n; j++) {
            if (arr[i] === arr[j]) {
                if (!result.includes(arr[i])) {
                    result.push(arr[i])
                }
            }
        }
    }
    result.push(missing)
    return result
}
console.log(missingAndRepeatingElements([3, 1, 3]))