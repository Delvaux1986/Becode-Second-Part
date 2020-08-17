
let fib = []; // Initialize array!

fib[0] = 0;  // assign 0 to index 0
fib[1] = 1;  // assign 1 to index 1 
for (let i = 2; i <= 50; i++) {
  // Next fibonacci number = previous + one before previous
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}