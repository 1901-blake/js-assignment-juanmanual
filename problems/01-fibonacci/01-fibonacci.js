/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let current = 1;
    let last = 1;

    let swap;
    if(n<3) return 1;
    for(let i = 1; i<n; i++)
    {
       swap = current;
       current = current + last;
       last = swap;
    }
    return last;
}