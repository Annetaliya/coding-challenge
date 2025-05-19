/* 
Write a simple JavaScript program to join all elements of the following array into a string.

Sample array : myColor = ["Red", "Green", "White", "Black"];

Expected Output :

"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/
function joinElements(arr) {
    console.log(arr.join())
    console.log(arr.join('+'))
    for(let i = 0; i < arr.length; i++) {
        
    }
}
joinElements(["Red", "Green", "White", "Black"])