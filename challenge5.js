//Write a JavaScript program to find the leap years in a given range of years.
//A leap year occurs every four years


function leapYear(arr) {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 4 === 0 && arr[i] % 100 !== 0) {
            newArray.push(arr[i])
        } else {
            continue
        }
    }
    return newArray;
}

console.log(leapYear([1992, 1990, 1996,1993, 2024]))