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

function remove(array, element) {
    const result = array.filter((item) => item !== element)
    return result
}

function removeElement(arr, element) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            
            continue
            
        }
        result.push(arr[i])
    }
    return result
}

console.log(removeElement([2, 5, 9, 6], 5));