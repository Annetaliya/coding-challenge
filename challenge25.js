/* 
Write a JavaScript program to find the most frequent item in an array.

Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

Sample Output : a ( 5 times )
*/


function commonOccurence(arr) {
    const obj = {};
    let keys = [];

    for(let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }

    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            keys.push(key)
        }
        
    }

    let max = keys[0];
    for (let i = 1; i < keys.length; i++){
        if (keys[i] > max) {
            max = keys[i]
        }
    }
    for (let key in obj) {
        if (obj[key] === max) {
            return `${key} (${max} times)`
        }
    }
    return obj
}

// method 3 using hash maps 
function mostFrequentItem(arr) {
    const frequencyMap = {};
    let maxFreq = 0;
    let mostFrequentItem;

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        frequencyMap[item] = (frequencyMap[item] || 0) + 1

        if (frequencyMap[item] > maxFreq) {
            maxFreq = frequencyMap[item]
            mostFrequentItem = item
        }

    }
    return `${mostFrequentItem} (${maxFreq} times)`
}

console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))