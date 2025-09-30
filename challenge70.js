/**
 * Given an array of n integers, the task is to find the third largest element. All the elements in the array are distinct integers. 

Examples : 

Input: arr[] = {1, 14, 2, 16, 10, 20}
Output: 14
Explanation: Largest element is 20, second largest element is 16 and third largest element is 14

Input: arr[] = {19, -10, 20, 14, 2, 16, 10}
Output: 16
Explanation: Largest element is 20, second largest element is 19 and third largest element is 16 
 */

function thirdLargestElement(arr) {
    const n = arr.length;

    function toSort(a,b) {
        return a - b;
    }

    arr.sort(toSort)
    return arr[n-3]
}

console.log(thirdLargestElement([19, -10, 20, 14, 2, 16, 10]))