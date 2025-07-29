/* 
Given an unsorted array arr[] of size n, containing elements
 from the range 1 to n, it is known that one number 
 in this range is missing, and another number occurs twice in the array, 
 find both the duplicate number and the missing number.

Examples: 

Input: arr[] = [3, 1, 3]
Output: [3, 2]
Explanation: 3 is occurs twice and 2 is missing.

Input: arr[] = [4, 3, 6, 2, 1, 1]
Output: [1, 5] 
Explanation: 1 is occurs twice and 5 is missing.
*/

function missingNum(arr) {
    let result = [];

    function toSort(a,b) {
        return a-b
    }
    arr.sort(toSort)
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        obj[item] = (obj[item] || 0) + 1
        
        if (arr[i] < arr[i + 1]) {
            result.push(arr[i + 1] - arr[i])
        }

    }
     let keys = []
        
        for (let key in obj) {
            keys.push(obj[key])

        }

    let max = keys[0]
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] > max) {
            max = keys[i]
        }
    } 
    
    for (let key in obj ) {
      if (obj[key] === max) {
        result.push(key)
      }
    }
    return result;
}
console.log(missingNum([3, 1, 3]))