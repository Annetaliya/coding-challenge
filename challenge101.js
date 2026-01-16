/**
 * Reverse an array arr[]. Reversing an array means rearranging
 *  the elements such that the first element becomes the last, 
 * the second element becomes second last and so on.
 * Input: arr[] = [1, 4, 3, 2, 6, 5]  
Output:  [5, 6, 2, 3, 4, 1]
Explanation: The first element 1 moves to last position, 
the second element 4 moves to second-last and so on.
 */

function reverseArray(arr) {
    const results = []
    const n = arr.length;

    for (let i = n -1; i >= 0; i--) {
        results.push(arr[i])
    }
    return results
}
console.log(reverseArray([1, 4, 3, 2, 6, 5]))