/* 
Given a binary array arr[] consisting of only 0s and 1s,
 find the length of the longest contiguous sequence of either 1s or 0s in the array.
 Input: arr[] = [0, 1, 0, 1, 1, 1, 1]
Output: 4
Explanation: The maximum number of consecutive 1’s in the array is 4 from index 3-6.

Input: arr[] = [0, 0, 1, 0, 1, 0]
Output: 2
Explanation: The maximum number of consecutive 0’s in the array is 2 from index 0-1.
*/

function findLongestSequence(arr) {
    let result = [];

    for (let i = 0; i<arr.length; i++) {
      if (arr[i + 1] === arr[i]) {
        result.push(arr[i])
      }
    }
    return result.length + 1

}
console.log(findLongestSequence([0, 0, 1, 0, 1, 0]))