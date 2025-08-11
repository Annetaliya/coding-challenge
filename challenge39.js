//Javascript program to find the second largest element in an arrayusing sorting

function secondLargest(arr) {
    function toSort(a,b) {
        return a-b
    }
    arr.sort(toSort)
    
    const n = arr.length;

    // for (let i = 0; i < arr.length; i++) {
    //     return arr[i]
    // }
    return arr[n-2]
} 
console.log(secondLargest([10, 5, 10]))