/**
 * Given a non-negative number represented as an array of digits. 
 * The is to add 1 to the number (increment the number represented by the digits by 1). 
 * The digits are stored such that the most significant digit is the first element of the
 *  array.

Examples :

Input : [1, 2, 4]
Output : 125
Explanation: 124 + 1 = 125 
 */

function addOneToArray(arr) {
    const result = arr.join('');
    const total = Number(result) + 1;
    return total;
}
console.log(addOneToArray([1,2,4]))