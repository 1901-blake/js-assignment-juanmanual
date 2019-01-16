/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
  let result = ""
  if (typeof someStr !== "string")
    throw TypeError(`first parameter is type ${typeof someStr} but expected type string`)
  if (startIndex < 0)
    return
  if (startIndex > endIndex)
    return
  if (endIndex > someStr.length)
    return
  for(let i = startIndex; i < endIndex; i ++)
    result += someStr.charAt(i);
  return result
}

console.log(substring('hello', 0, 3))