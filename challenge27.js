/* 
Write a JavaScript program to shuffle an array.

*/

function arrayShuffle(arr) {
    let result = arr.slice()

    for (let i = result.length -1; i >= 0; i--) {
        let j = Math.floor(Math.random() * i + 1)
        let temp;
        temp = result[i];
        result[i] = result[j]
        result[j] = temp
        
    }
    return result
}
console.log(arrayShuffle([3, 8, 9, 5, 2]))