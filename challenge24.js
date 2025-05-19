/* 
Write a JavaScript program to remove duplicate items from an array 
(ignore case sensitivity). 
sample array [1,6,7,1,5, 4, 5]
*/

function removeDuplicates(arr){
    const result = arr.filter((element, index) => arr.indexOf(element) === index)
    return result;
}

function duplicateRemove(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i] == i)){
            continue
            
        }
        result.push(arr[i])

      
    }
    return result
}
console.log(duplicateRemove([1,6,7,1,5, 4, 5]))