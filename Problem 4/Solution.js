// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let x = 0
    let y = 0

    // Sorted the number inside array in increasing order
    arr.sort()
    // looping first n-1 element [1,n-1]
    for(let i= 0;i<arr.length-1;i++){
        x=x+arr[i]
    }

    // looping for last n-1 element [2,n]
    for(let j= 1;j<arr.length;j++){
        y=y+arr[j]
    }
    console.log(`${x} ${y}`)
    
}