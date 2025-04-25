/* There are two arrays with individual values. Write a JavaScript program to
 compute the sum of each individual index value in the given array.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]*/

function sumElements (array1, array2) {
    const sumArray = [];
    let maxLen = Math.max(array1.length, array2.length)
    for (let i = 0; i < maxLen; i++) {
        let sum = (array1[i] || 0) + (array2[i] || 0)
        sumArray.push(sum)
    }
    return sumArray

}

function sumArray(array1, array2) {
    const resultArray = [];
    const len  = Math.max(array1.length, array2.length)
    for (let i = 0; i < len; i++) {
        let sum = (array1[i] || 0) + (array2[i] || 0)
        resultArray.push(sum)
       
    }
    return resultArray
}

console.log(sumArray([1,0,2,3,4],[4, 5, 8, 10, 12, 13]))