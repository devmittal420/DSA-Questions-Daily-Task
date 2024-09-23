function flatArray(arr) {
    let empArr = []
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i]))
        {
           empArr =  empArr.concat(flatArray(arr[i]))
        }
        else{
            empArr.push(arr[i])
        }
    }
    // return empArr;
    console.log(empArr);
    
    
}

const arr = [1, 2, [3, [4], [5, 6]], [7]];
console.log(flatArray(arr));
