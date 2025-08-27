/*
Given an array arr[] of size n and an integer k, the task is to insert a duplicate 
of k adjacent to its every occurrence. Keep array's original length same by removing 
the elements from the back.

Examples:  

Input: arr[] = [1, 0, 2, 3, 0, 4, 5, 0], K = 0 
Output: [1, 0, 0, 2, 3, 0, 0, 4]
 */

function addAdjacentElement(arr, k) {
    const n = arr.length;
    let count = 0;

    for(let i = 0; i < n; i++) {
        if (arr[i] === k) {
            arr.splice(i + 1, 0, k)
            i++;
            arr.pop()
         
            
        }
    }
    return arr;
}
console.log(addAdjacentElement([1, 0, 2, 3, 0, 4, 5, 0], 0))