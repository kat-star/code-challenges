// PROBLEM: return the nth number in the fibonacci sequence
// 4 different solutions:

// TABULATION
function fibonacci(n) {
  let table = new Array(n);
  table[0] = 0;
  table[1] = 1;

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
}

// MEMOIZATION
// function fibonacci(n, memo = {}) {
//   if (n in memo) return memo[n];
//   if (n === 0) return 0;
//   if (n === 1 || n === 2) return 1;

//   memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//   return memo[n];
// }


// INSTINCTIVE SOLUTION
// function fibonacci(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   const fibNums = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     fibNums.push(fibNums[fibNums.length -1] + fibNums[fibNums.length - 2]);
//   }
//   return fibNums[fibNums.length - 1];
// }


// RECURSION (2N)
// function fibonacci(n) {
//   if (n === 1 || n === 2) return 1;

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }


console.log(fibonacci(0));
console.log(fibonacci(2)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025 