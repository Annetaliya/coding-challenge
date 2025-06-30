/* 
Write a JavaScript program to shuffle an array.

*/

function shuffleArray(arr) {
    let result = arr.slice()

    for (let i = result.length - 1; i >= 0; i--) {
        let random = Math.floor(Math.random() * i + 1)

        let temp = result[i]
        result[i] = result[random];
        result[random] = temp;
    }
    return result;

    
}
console.log(shuffleArray([1,2,3,4,5]))