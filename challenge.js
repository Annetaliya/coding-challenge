//Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

function frequent(array) {
    if (array.length === 0) {
        return null
    }
    if (!Array.isArray(array)) {
        return 'Invalid Input'
    }

    let obj = {};
    const items =[]
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]]) {
            obj[array[i]] += 1;

        } else {
            obj[array[i]] = 1;
        }
    }
    for (let keys in obj) {
        if (obj.hasOwnProperty(keys)) {
            items.push(obj[keys])
        }
    }
    let max = items[0];
    for (let i = 1; i < items.length; i++) {
        if (items[i] > max) {
            max = items[i]
        }
    }
    for (let keys in obj) {
        if (obj[keys] === max) {
            return `${keys}, ${max}`
        }
    }


    return obj;
}
console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))