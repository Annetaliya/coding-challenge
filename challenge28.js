/* 
Write a JavaScript program to find the most frequent item in an array.

Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

Sample Output : a ( 5 times )
*/

function frequentElement(arr) {
    const obj = {}
    let max = 0;
    let mostFrequentItem;
    

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        obj[item] = (obj[item] || 0) + 1;

        if (obj[item] > max) {
            max = obj[item]
            mostFrequentItem = item
        }
    }
    return `${mostFrequentItem} (${max} times)`;
}
console.log(frequentElement([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))