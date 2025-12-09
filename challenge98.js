/**
 * Given an array arr[] of size n, the task is to find all the Leaders in the array. 
 * An element is a Leader if it is greater than or equal to all 
 * the elements to its right side.

Note: The rightmost element is always a leader.
Input: arr[] = [16, 17, 4, 3, 5, 2]
Output: [17 5 2]
Explanation: 17 is greater than all the elements to its right 
i.e., [4, 3, 5, 2], therefore 17 is a leader. 
5 is greater than all the elements to its right i.e., 
[2], therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.
 */

function arrayLeader(arr) {
    let result = [];
    const n = arr.length;
    let end = arr[n -1]

    for (let i = 0; i < n; i++){
        let j;
        for (j = i + 1; j < n; j++) {
            if (arr[i] < arr[j]) {
                break;
            }
        }
        if (j === n) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(arrayLeader([16, 17, 4, 3, 5, 2]))