
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vow = []
    let cons = []
    for(let i = 0 ; i<s.length;i++){
        if(s[i]=="a" || s[i]=="e" || s[i]=="i" || s[i]=="o" || s[i]=="u"){
            vow.push(s[i])
        }
        else{
            cons.push(s[i])
        }
    }
    var total = vow.concat(cons);
    for(let i = 0 ; i<total.length;i++){
        console.log(total[i])
    }
    
}

