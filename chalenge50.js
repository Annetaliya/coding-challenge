/*
Given an array arr[] of size n, the task is to find all 
the Leaders in the array. An element is a Leader if it is 
greater than or equal to all the elements to its right side.

Note: The rightmost element is always a leader.

Examples:

Input: arr[] = [16, 17, 4, 3, 5, 2]
Output: [17 5 2]
Explanation: 17 is greater than all the elements to its right 
i.e., [4, 3, 5, 2], therefore 17 is a leader.
 5 is greater than all the elements to its right i.e., [2],
  therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.

Input: arr[] = [1, 2, 3, 4, 5, 2]
Output: [5 2]
Explanation: 5 is greater than all the elements to its right 
i.e., [2], therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader. 
*/

function findLeadingElements(arr) {
    let result = [];
    let n = arr.length;
    let max = arr[0];
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    let idx = arr.indexOf(max);
    const newArray = arr.slice(idx + 1);
    let len = newArray.length;
    let maximum = newArray[0];
    for  (let i = 1; i < len; i++ ) {
        if (newArray[i] > maximum) {
            maximum = newArray[i]
        }
    }

    result = [max, maximum, newArray[len -1]]
    //result.push(max)
    return result;
}

///\ method 2

function leader(arr) {
    let result = [];
    let maxRight = arr[arr.length - 1]

    result.push(maxRight)

    for (let i = arr.length -2; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            maxRight = arr[i]
            result.push(maxRight)
        }
    }
    return result.reverse();
}
console.log(leader( [1, 2, 3, 4, 5, 2]))