/**
 * Write a JavaScript program that accepts a string as input 
 * and swaps the case of each character. For example 
 * if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
 */

function swapCharacters(str) {
    let swaped = ''
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            swaped += str[i].toUpperCase()
        } else {
            swaped += str[i].toLowerCase()
        }
    }
    return swaped;
}
console.log(swapCharacters('The Quick Brown Fox'))