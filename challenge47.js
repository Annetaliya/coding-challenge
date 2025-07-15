/* 
Given an integer n, we need to repeatedly find the sum of 
its digits until the result becomes a single-digit number.

Examples:
Input: n = 1234 
Output: 1 
Explanation:
Step 1: 1 + 2 + 3 + 4 = 10 
Step 2: 1 + 0 = 1
*/

function sumOfDigits(arr) {
    let sum = 0;
    const item = String(arr)
    const newArry = item.split('')

    for (let i = 0; i < newArry.length; i++) {
       sum += Number(newArry[i])
    }
    const item2 = String(sum)
   const item3 = item2.split('')
    const first = Number(item3[0])
    const second = Number(item3[1])
    return first + second;
}
console.log(sumOfDigits(1234))