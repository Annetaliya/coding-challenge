/**
 * Given an array of integers arr[], move all the zeros to the 
 * end of the array while maintaining the relative order of all non-zero elements.

Examples: 

Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
Output: [1, 2, 4, 3, 5, 0, 0, 0]
 */

function moveZerosToEnd(arr) {
    let j = 0;
   
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        j++
      
    }
   }
 
    return arr;
}
console.log(moveZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]))