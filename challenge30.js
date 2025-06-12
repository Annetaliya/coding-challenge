/* 
There are two arrays with individual values. Write a JavaScript program to compute 
the sum of each individual index value in the given array.

Sample array :

array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];

Expected Output :

[4, 5, 8, 10, 12, 13]
*/

function findSumOfIndex(array1, array2) {
    const len = Math.max(array1.length, array2.length)
    let result= []
    for (let i = 0; i < len; i++) {
        let sum = (array1[i] || 0) + (array2[i] || 0)
        result.push(sum)
    }
    return result;
}

function sumOfArrays(arr1, arr2) {
    let result = [];
    let len = Math.max(arr1.length, arr2.length)

    for (let i = 0; i < len; i++) {
        let sum = (arr1[i] || 0) + (arr2[i] || 0)
        result.push(sum)

    }
    return result;
}
//console.log(findSumOfIndex([1,0,2,3,4],[3,5,6,7,8,13] ))

console.log(sumOfArrays([1,0,2,3,4],[3,5,6,7,8,13]))