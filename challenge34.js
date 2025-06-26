//left rotate an arry

function rotate(arr, d) {
    let result = [];

    while (d > 0) {
        let element = arr[0]
        const n = arr.length


     for (let i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i]
       
          
    }
     arr[n -1] = element
    

    d--;

    }
  

    return arr;

}

console.log(rotate([1,2,3,4,5], 3))