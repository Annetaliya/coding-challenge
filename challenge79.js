/**
 * Given a sorted array arr[] of size n, the goal is to rearrange 
 * the array so that all distinct elements appear at the beginning in 
 * sorted order. Additionally, return the length of this distinct sorted subarray.

Note: The elements after the distinct ones can be in 
any order and hold any value, as they don't affect the result.

Examples: 

Input: arr[] = [2, 2, 2, 2, 2]
Output: [2]
 */

function removeDuplicates(arr) {
    const n = arr.length;
    let result = []

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (arr[i] === arr[j])
                if (!result.includes(arr[i])){
                    result.push(arr[i])
                }
        }
    }
    return result;
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5]))