// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    ar.sort()
    let count = 0
    const highest = ar[ar.length-1]
    for(let i =ar.length-1;i>=0;i--){
        if(highest==ar[i]){
            count+=1
        }
        else{
            continue
        }
    }
    console.log(count)
}
