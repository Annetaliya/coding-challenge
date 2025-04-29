/* Write a JavaScript function to parameterize a string.

Test Data :

console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"*/

function string_parameterize(str) {
    newStr = str.toLowerCase()
    const array = newStr.split(' ')
    return array.join('-')

}

function stringConvert(str) {
    let newstr = '';
    for (let i = 0; i < str.length; i++) {
        newstr += str[i].toLowerCase().replace(' ', '-')
    }
    return newstr
}
console.log(stringConvert("Robin Singh from USA."));

