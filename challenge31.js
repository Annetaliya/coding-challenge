/* 
Write a JavaScript program to find duplicate values in a JavaScript array.
*/

function findDuplicates(arr) {
    let result = arr.filter((item, index) => arr.indexOf(item) !== index)
    return result


    

}

function returnDuplicates(arr) {
    let results = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                if (!results.includes(arr[i])) {
                    results.push(arr[i])
                }
            }
        }
    }
    return results;
}

function dupicatesReturned(arr) {
    const obj = {};
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        obj[item] = (obj[item] || 0) + 1
    }
    for (let key in obj) {
        if (obj[key] > 1) {
            result.push(Number(key))
        }
    }
    return result
}
console.log(dupicatesReturned([3,6,8,6,5,3]))