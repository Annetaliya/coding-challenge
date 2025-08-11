/* 
Given an array of positive integers arr[] of size n, 
the task is to find second largest distinct element in the array.

Note: If the second largest element does not exist, return -1.

Examples:
Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.

Input: arr[] = [10, 5, 10]
Output: 5
Explanation: The largest element of the array is 10 and the second largest element is 5.
 */

function findSecondLargest(arr) {
    if (!arr) {
        return null
    }

    function toSort(a,b) {
        return a-b
    }

    arr.sort(toSort)
    
    let element;
    let n = arr.length;
    let max = arr[n-1];

    let newArr = arr.slice(0, arr.indexOf(max))
    let newMax = newArr[0]

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > newMax) {
            newMax = newArr[i]
        }

    }
    if (n === 3) {
        element = arr[n-1]

    } else if (n < 2) {
        return -1
    } else {
        element = arr[n -2]
    }
    
    //const element = arr[n-2]
    return newMax;

    
}

function getSecondLargest(arr) {
    const n = arr.length;

    for (let i = n -2; i > 0 ; i--) {
        if (arr[i] !== arr[n -1]) {
            return arr[i]

        }
    }
    return -1
}

console.log(getSecondLargest([10, 5, 10]))