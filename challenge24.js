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
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]){
                if (!result.includes(arr[i])){
                    result.push(arr[i])
                }
            }
        }
        
    }
    return result
}
console.log(duplicateRemove([1,6,7,1,5, 4, 5]))