/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  reversedArray = someStr.split("")
  result = ""
  while(reversedArray.length > 0){
    result = result + reversedArray.pop() 
  }
  return result
}