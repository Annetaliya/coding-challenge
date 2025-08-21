/*
Given an integer n, we need to repeatedly find the sum of its digits 
until the result becomes a single-digit number.
Input: n = 1234 
Output: 1 
Explanation:
Step 1: 1 + 2 + 3 + 4 = 10 
Step 2: 1 + 0 = 1

Input: n = 5674
Output: 4
Explanation: 
Step 1: 5 + 6 + 7 + 4 = 22 
Step 2: 2 + 2 = 4
 */

function findSumOfLastDigit(n) {
    let result = n.toString()
    let sum = 0;


}
console.log(findSumOfLastDigit(5674))
let n = 5674;
let text = n.toString();
let num = text.split('')
let sum = 0;
for (let i = 0; i < num.length; i++) {
    sum += Number(num[i])
    
}
let h = sum.toString()
let g = h.split('')
let final = Number(g[0]) + Number(g[1])

findSumOfLastDigit(n)
console.log(typeof(text))
console.log(final)