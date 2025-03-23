/* Write the function camelize(str) that changes dash-separated words 
like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased
camelize("background-color") == 'backgroundColor';
.*/

function camelize(str) {
    const array = str.split('-');

    const newArray = array.map((element, index) => {
        return index === 0 ? element : element[0].toUpperCase() + element.slice(1)
    })

    return newArray.join('');
}

console.log(camelize("background-color-level"))