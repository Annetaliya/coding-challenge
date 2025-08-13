/*
Given a binary array arr[] consisting of only 0s and 1s, 
find the length of the longest contiguous sequence of either 1s or 0s in the array.

Examples : 

Input: arr[] = [0, 1, 0, 1, 1, 1, 1]
Output: 4
Explanation: The maximum number of consecutive 1’s in the array is 4 from index 3-6.

Input: arr[] = [0, 0, 1, 0, 1, 0]
Output: 2
Explanation: The maximum number of consecutive 0’s in the array is 2 from index 0-1.

Input: arr[] = [0, 0, 0, 0]
Output: 4
Explanation: The maximum number of consecutive 0’s in the array is 4. 
*/

function maxConsequtive(arr) {
    let maxCount = 0
    let counter = 1;
    const n = arr.length;

    for (let i =1; i < n; i++) {
        if (arr[i] === arr[i - 1]){
            counter++
        } else {
            maxCount = Math.max(maxCount, counter);
            counter = 1
        }
    }
    return Math.max(maxCount, counter)
    

}
console.log(maxConsequtive([0, 1, 0, 1, 1, 1, 1]))