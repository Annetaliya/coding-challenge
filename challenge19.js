/* Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3,
 "buzz" at multiples of 5 and 
"fizzbuzz" at multiples of 3 and 5*/

//create a for loop that takes zero to 99 as the iterating value
//fizz should be outputed 3 times
//buzz mutiples of 5
//fizzbuzz at mutiples of 3 and 5

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
       if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzBuzz')
       } else if (i % 3 === 0) {
        console.log('fizz')
       } else if  (i % 5 === 0) {
        console.log ('buzz')
       }
    }
}
fizzBuzz()

