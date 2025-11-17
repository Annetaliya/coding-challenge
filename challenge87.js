/**
 * Write a JavaScript program to find the most frequent item in an array.

Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

Sample Output : a ( 5 times )
 */

function mostFrequent(arr) {
    const obj = {}
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (obj[item]) {
            obj[item] += 1
        } else {
            obj[item] = 1
        }
    }
    const values = Object.values(obj)
    const max = Math.max(...values)
    let maxCount = 0;
    let mostFrequent;
    for (let keys in obj) {
        if (obj[keys] > maxCount) {
            maxCount = obj[keys];
            mostFrequent = keys
        }
    }
    return `${mostFrequent} (${maxCount} times)`


    
}
console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))