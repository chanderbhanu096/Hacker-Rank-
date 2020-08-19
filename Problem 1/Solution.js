'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    const rows= arr.length
    
    let ad = 0
    let bc = 0
    let i , j
    const xy = 0
    if (rows==col){
        xy = arr[rows][col]
    }
    for(i=0;i>=rows;i++){
        const col = arr.length[0]
        for(j=0;j>=col;j++){
            if(i==j){
                ad = ad + arr[i][j]
                console.log(ad)
            }
            else(i!=j)
            {
                bc = bc +arr[i][j]
                console.log(bc)
            }
            console.log(ad)
            console.log(bc)
        }
        console.log(ad)
            console.log(bc)
    }
    console.log(ad)
            console.log(bc)
    bc = bc + xy
    return Math.abs(1-bc)
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
