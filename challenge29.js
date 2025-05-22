/* 
Write a JavaScript program to perform a binary search.

Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.

Sample array :

var items = [1, 2, 3, 4, 5, 7, 8, 9];

Expected Output :
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4
*/

function binary_Search(arr,n ) {
    //return arr.indexOf(n)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i
        }
    }
}
console.log(binary_Search([1, 2, 3, 4, 5, 7, 8, 9], 1))