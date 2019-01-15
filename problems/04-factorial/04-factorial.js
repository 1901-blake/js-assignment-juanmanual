/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    if(sumNum <= 1)
        return 1
    
    return sumNum * factorial(sumNum -1)
}

for(let int = 1; int < 10; int++) {
    console.log(`factorial(${int}) = ${factorial(int)}`)
}