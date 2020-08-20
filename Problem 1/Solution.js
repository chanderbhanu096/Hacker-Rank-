function diagonalDifference(arr) {
    
    //Diagonal sum for diagonal A12
    let abcd = 0; 

    //Diagonal sum for diagonal A21
    let xy = 0;
    
    const length = arr.length
    for(let i = 0 ;i<=arr.length-1;i++){
      abcd =abcd+arr[i][i]  
      xy = xy+arr[length-1-i][i]
      }

      //difference between two diagonal sum
    return Math.abs(abcd-xy)
  }