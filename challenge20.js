/* 
Write a JavaScript function to clone an array.

Test Data :

console.log(array_Clone([1, 2, 4, 0]));

console.log(array_Clone([1, 2, [4, 0]]));

[1, 2, 4, 0]

[1, 2, [4, 0]]
*/

function array_Clone(arr) {
   
    if (arr) {
        let result = arr.slice(0) 
        return result
    }
    
}
array_Clone(console.log([1, 2, [4, 0]]))

function copyItems(items) {
    let result = [];
    for (let i = 0; i < items.length; i++) {
        result.push(items[i])
    }
    return result
}
console.log(copyItems([1, 2, [4, 0]]))

const item = [1,56, 7, 8]
console.log(item.length)