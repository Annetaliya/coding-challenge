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

function abbrev(str) {
    const newStr = str.split(' ');
    let firstStr = newStr[0];
    const secondStr = newStr[1];
    const singleChar = secondStr.slice(0,1)
    
    return  `${firstStr} ${singleChar}`
}
console.log(abbrev("Robin Singh"));