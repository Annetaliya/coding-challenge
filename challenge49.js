/*
 Given an array arr[] of size n and an integer k, 
 the task is to insert a duplicate of k adjacent to its every occurrence.
  Keep array's original length same by removing the elements from the back.

Examples:  

Input: arr[] = [1, 0, 2, 3, 0, 4, 5, 0], K = 0 
Output: [1, 0, 0, 2, 3, 0, 0, 4]
Explanation: The given array [1, 0, 2, 3, 0, 4, 5, 0] 
is modified to [1, 0, 0, 2, 3, 0, 0, 4] after insertion of two 0's 
and truncation of two extra elements.

Input: arr[] = [7, 5, 8], K = 8 
Output: [7, 5, 8] 
Explanation: After inserting an adjacent 8 into the array, it got 
truncated to restore the original size of the array.  
*/

function addToAdjacent(arr,k) {
    let result = [];
    let n = arr.length;
    for (let i = 0; i < n; i++){
        result.push(arr[i])
        if (arr[i] === k) {
            
            result.push(k)
           
        }
        if (result.length === n){
            break
        }

    }
    return result.slice(0, n)
    
}
console.log(addToAdjacent([1, 0, 2, 3, 0, 4, 5, 0], 0))