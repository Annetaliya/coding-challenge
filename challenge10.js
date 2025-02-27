/* 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 *
 * Given an array of integers `nums` and an integer `target`, return indices
 * of the two numbers such that they add up to `target`.
 *
 * You may assume that each input would have exactly one solution, and you
 * may not use the same element twice.
 *
 * You can return the answer in any order.
 * Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 2, 3
 */

function findSumIndex(array, target) {
    const indices = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                indices.push(array.indexOf(array[i]))
            }
        }
    }
    return indices;
    
}

console.log(findSumIndex([10,20,10,40,50,60,70], 50))