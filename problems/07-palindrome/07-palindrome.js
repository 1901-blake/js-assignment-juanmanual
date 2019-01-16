/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    palArray = someStr.split("")

    while(palArray.length >= 2) {
      if (palArray.pop() !== palArray.shift()) return false
    }
    return true
}
