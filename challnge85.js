/**
 * Write a simple JavaScript program to join all elements of the following array into a string.

Sample array : myColor = ["Red", "Green", "White", "Black"];

Expected Output :

"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
 */

function joinElements(array) {
   return array.join()
}
console.log(joinElements(["Red", "Green", "White", "Black"]))