/* Write a JavaScript function to convert a string into abbreviated form.

Test Data :

console.log(abbrev_name("Robin Singh"));
"Robin S." */

function abbrev_name(str) {
    const newStr = str.split(' ')
    const firstString = newStr[0]
    const abbrv = newStr[1];
    const newAbbrv = abbrv.charAt(0)
    return `${firstString} ${newAbbrv}.`

}
console.log(abbrev_name("Robin Singh"));