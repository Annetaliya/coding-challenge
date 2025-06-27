/* 
Write a JavaScript program to find duplicate values in a JavaScript array.
*/

function findDuplicates(arr) {
    let results = []
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]

        obj[item] = (obj[item] || 0) + 1

    }
    for (let key in obj) {
            if (obj[key] > 1) {
                results.push(Number(key))
            }
        }
    return results
}

console.log(findDuplicates([1,2,3,1,3,6]))