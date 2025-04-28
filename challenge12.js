/* Write a JavaScript function to extract a specified number of characters from a string.

Test Data :

console.log(truncate_string("Robin Singh",4));
"Robi"*/

function truncate_string(str,num) {
    if (str.length === 0) {
        return null
    }

    if (typeof str !== 'string') {
        return 'Invaid Input'
    }

    
    const newStr = str.slice(0, num);
    return newStr
}

function removeItems(str, num) {
    return str.slice(0, num)
}
console.log(removeItems("Robin Singh",4))