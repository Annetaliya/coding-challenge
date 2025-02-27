/**
 
/*  Write a JavaScript function to remove a specific element from an array.

Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]  */
 

function remove_array_element(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1)
    return array
}

console.log(remove_array_element([2, 5, 9, 6], 5));