/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  let arrayLength = numArray.length
  // the most recent register
  let current
  // the most recent register before updating
  let past
  // whether there has been a swap
  let changed = false
  do{
    changed = false
    current = numArray[0]
    for (let i = 1; i < arrayLength ; i++) {
      past = current
      current = numArray[i]

      if (past > current) {
          numArray[i] = past
          numArray[i-1] = current
          current = numArray[i]
          changed = true
      }
    }
  } while (changed === true)
  return numArray
}


arr = [ 10, 20, 40, 30, 20, 11, 8 ]
console.log(arr)
console.log(bubbleSort(arr))