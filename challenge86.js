/**
 * Write a JavaScript program that accepts a number as input and inserts
 *  dashes (-) between each even number.
 *  For example if you accept 025468 the output should be 0-254-6-8.
 */

function transformNumber(num) {
    

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
            num[i] += '-';
        }
    }
    let result = num.join('')
    return result;

}
console.log(transformNumber([0,2,5,4,6,8]))