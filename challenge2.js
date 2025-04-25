// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
//  For example if you accept 025468 the output should be 0-254-6-8.

function insertElement(array) {
    if (array.length === 0) {
        return null
    }
    if (!Array.isArray(array)) {
        return 'Invalid Input'
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i + 1] % 2 === 0) {
            array[i] += '-';
        }
    }
    return array.join('')
}

function insertdash(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i + 1] % 2 === 0) {
            array[i] += '-'
        }
    }
    return array.join('')
}
console.log(insertElement([0, 2, 5, 4, 6, 8]))