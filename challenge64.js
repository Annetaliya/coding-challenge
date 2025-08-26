/*
Given an array arr[] of size n, the task is to rearrange it in alternate
 positive and negative manner without changing the relative order of positive
  and negative numbers. In case of extra positive/negative 
  numbers, they appear at the end of the array.

Note: The rearranged array should start with a positive 
number and 0 (zero) should be considered as a positive number.

Examples: 

Input:  arr[] = [1, 2, 3, -4, -1, 4]
Output: arr[] = [1, -4, 2, -1, 3, 4]

Input:  arr[] = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]
Output: arr[] = [5, -5, 2, -2, 4, -8, 7, 1, 8, 0]
 */

function rightRotate(arr, start, end) {
    let temp = arr[end]

    for (let i = end; i > start; i--) {
        arr[i] = arr[i -1]
    }

    arr[start] = temp
}

function rearrange(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] >= 0 && i % 2 === 1) {
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < 0) {
                    rightRotate(arr, i, j)
                    break;
                }
            }

        } else if (arr[i] < 0 && i % 2 === 0) {
            for (let j = i + 1; j < n; j++) {
                if (arr[j] >= 0) {
                    rightRotate(arr, i, j)
                    break;
                }
            }

        }

    }
    return arr;
}
console.log(rearrange([1, 2, 3, -4, -1, 4]))