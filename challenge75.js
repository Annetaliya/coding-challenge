/**
 * Given a binary array arr[] consisting of only 0s and 1s, 
 * find the length of the longest contiguous sequence of either 1s or 0s in the array.

Examples : 

Input: arr[] = [0, 1, 0, 1, 1, 1, 1]
Output: 4
Explanation: The maximum number of consecutive 1’s
 in the array is 4 from index 3-6.
 */

 function consecutiveOccurence(arr) {
    let count = 1;
    let maxCount = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count += 1
        } else {
            maxCount = Math.max(maxCount, count);
            count = 1
        }
    }
    return Math.max(maxCount, count);
 }

 console.log(consecutiveOccurence([0, 1, 0, 1, 1, 1, 1]))