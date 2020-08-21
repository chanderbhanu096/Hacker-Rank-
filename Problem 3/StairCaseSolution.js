function staircase(n) {
    // Array filled with blank spaces
  var line = Array(n + 1).fill(' ');
  for (var i = n - 1; i >= 0; i--) {
      // n-1 starts location from the back
    line[i] = '#';
    console.log(line.join(''));
  }
}
