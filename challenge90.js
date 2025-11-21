/**
 *  Display Colors with Ordinals

We have the following arrays :

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]

Write a JavaScript program to display the colors in the following way :

"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -

Note : Use ordinal numbers to tell their position.
 */

function attachPrefix(arr) {
    let prefix = 'th'

    for (let i = 0; i < arr.length; i++) {
        const position = i + 1
        if (position === 1) {
            prefix = 'st'
        } else if (position === 2) {
            prefix = 'nd'
        } else if (position === 3) {
            prefix = 'rd'
        } else {
            prefix = 'th'
        }
        console.log(`${position}${prefix} choice is ${arr[i]}`)
    }


}
 attachPrefix(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "])