/*
You have an inclusive interval [lower, upper] and a sorted array of unique integers arr[], 
all of which lie within this interval. A number x is considered missing 
if x is in the range [lower, upper] but not present in arr. 
Your task is to return the smallest set of sorted ranges that includes all missing numbers, 
ensuring no element from arr is within any range, and every missing number 
is covered exactly once.

Input: arr[] = [14, 15, 20, 30, 31, 45], lower = 10, upper = 50
Output: [[10, 13], [16, 19], [21, 29], [32, 44], [46, 50]]
Explanation: These ranges represent all missing numbers between 
10 and 50 not present in the array
 */

function missingRangesOfNumbers(arr, lower, upper) {
    let results = [];
    const n = arr.length;

    if (lower < arr[0]) {
        results.push([lower, arr[0] - 1])
    }

    for (let i = 0; i < n; i++) {
        if (arr[i + 1] - arr[i] > 1) {
            results.push([arr[i] + 1, arr[i + 1] - 1] )
        }
    }

    if (upper > arr[n-1]) {
        results.push([arr[n-1] + 1, upper] )
    }
    return results

}
console.log(missingRangesOfNumbers([14, 15, 20, 30, 31, 45], 10, 50))