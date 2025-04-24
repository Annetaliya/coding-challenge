//Write a JavaScript program to find the leap years in a given range of years.
//A leap year occurs every four years


function leapYear(arr) {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 4 === 0) {
            newArray.push(arr[i])
        } else {
            continue
        }
    }
    return newArray;
}

function findLeapYear(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 4 === 0) {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(findLeapYear([1992, 1990, 1996,1993, 2024]))