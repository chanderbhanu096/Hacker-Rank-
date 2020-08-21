// Complete the plusMinus function below.
function plusMinus(arr) {
    let x=0,y=0,z=0
    let m=0,n=0,o=0
    for(let i=0;i<=arr.length-1;i++){
        if((arr[i])>0){
            // number of positive numbers in the array
            x=x+1;
        }
        else if((arr[i])<0){
            // number of negative numbers in the array
            y=y+1;
        }
        else
        {
            // number of zeroes in the array
            z=z+1;
        }
    }
    m = x/(arr.length)
    n = y/(arr.length)
    o = z/(arr.length)
    //  .tofixed() for defining the output required upto to how much decimal points
    console.log(m.toFixed(6))
    console.log(n.toFixed(6))
    console.log(o.toFixed(6))
}