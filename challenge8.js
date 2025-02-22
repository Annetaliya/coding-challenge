/* Write a JavaScript program to compute the union of two arrays.
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]*/

function combineArray(array1, array2) {
    if (array1.length === 0 && array2.length === 0) {
        return null
    }
    if (!Array.isArray(array1) && !Array.isArray(array2)) {
        return 'Invalid Input'
    }

    const newArray = array1.concat(array2);
    const result = []
    for (let i = 0; i < newArray.length; i++) {
        for (let j = i + 1; j < newArray.length; j++) {
            if (newArray[i] !== newArray[j]) {
                if (!result.includes(newArray[i])) {
                    result.push(newArray[i])
                }
            }
        }
    }
    return result
}
console.log(combineArray([1, 2, 3], [100, 2, 1, 10]))