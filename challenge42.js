/* 
Given an array of integers arr[], the task is to move all the zeros 
to the end of the array while maintaining the relative order of all non-zero elements.

Examples: 

Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
Output: arr[] = [1, 2, 4, 3, 5, 0, 0, 0]
Explanation: There are three 0s that are moved to the end.
*/

function moveZeros(arr) {
    let result = [];
    let zerosArr = [];

    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i] === 0) {
            zerosArr.push(arr[i])
            
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            continue;
        }
        result.push(arr[i])
    }
    const newArr = [result, ...zerosArr]
    return newArr.flat()
}
console.log(moveZeros([1, 2, 0, 4, 3, 0, 5, 0]))