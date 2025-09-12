/* 
Given an array of n integers, the task is to find the third largest element. All the elements 
in the array are distinct integers. 
Input: arr[] = {1, 14, 2, 16, 10, 20}
Output: 14
Explanation: Largest element is 20, second largest element is 16 and third largest element is 14
*/
//sort the array
function findThirLargestElement(arr) {
    const n = arr.length;

    function toSort(a,b) {
        return a -b;
    }
    arr.sort(toSort)

    for (let i = n - 3; i >= 0; i--) {
        if (arr[i] !== arr[n-1]) {
            return arr[i]
        }
    }
    return -1
}
console.log(findThirLargestElement([1, 14, 2, 16, 10, 20]))