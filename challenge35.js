/* 
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]

Write a JavaScript program to display the colors in the following way :

"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -

Note : Use ordinal numbers to tell their position.

 */

function suffix(arr) {
    let position;
    let suffix;

    for (let i = 0; i < arr.length; i++){
        position = i + 1;

        if (position % 100 >= 11 && position % 100 <= 13) {
            suffix = 'th'
        }

        if (position % 10 === 1) {
            suffix = 'st'
        } else if (position % 10 === 2) {
            suffix = 'nd'

        } else if (position % 10 ===3) {
            suffix = 'rd'
        } else {
            suffix = 'th'
        }
        console.log (`${position}${suffix} choice is ${arr[i]}`)

    }
    
}
suffix(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "])