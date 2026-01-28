/**
 * Given an array arr[] and an integer k, find the array after reversing 
 * every subarray of consecutive k elements in place. If the last 
 * subarray has fewer than k elements, 
 * reverse it as it is. Modify the array in place, do not return anything.
 * Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], k = 3
Output: [3, 2, 1, 6, 5, 4, 8, 7]
 */

function reverseInGroups(arr, k) {
    let results = []
    const n = arr.length;

    for (let i = 0; i < arr.length; i += k) {
        let min = Math.min(i + k -1, n -1)

        for (let j = min; j >=i; j--) {
            results.push(arr[j])
        }
        
    }
    return results
}
console.log(reverseInGroups([1, 2, 3, 4, 5, 6, 7, 8], 3))