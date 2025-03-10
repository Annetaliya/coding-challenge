/* Write the function camelize(str) that changes dash-separated words 
like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased
camelize("background-color") == 'backgroundColor';
.*/

function camelize(str) {
    if (str.length === 0) {
        return null
    }
    if (typeof str !== 'string') {
        return 'Invalid Input'
    }
    const newStr = str.split('-');
    const result = newStr.map((element, index) => {
       return index === 0 ? element : element[0].toUpperCase() + element.slice(1)
    })
    return result.join('')
   
    
   
}
console.log(camelize("list-style-image"))
