/* 
Write a JavaScript program to find duplicate values in a JavaScript array.
*/

function findDuplicates(arr) {
    let result = arr.filter((item, index) => arr.indexOf(item) !== index)
    return result
    

}
console.log(findDuplicates([3,6,8,6,5,3]))