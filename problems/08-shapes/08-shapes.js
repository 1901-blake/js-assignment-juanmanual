/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape (shape, height, character) {
  
}

function printSquare (height, character) {
  let line = "";
  for (let i = 0; i < height; i++) {
    line += character
  }
  for (let i = 0; i < height; i++) {
    console.log(line)
  }

}

function printDiamond (height, character) {
  let line = ""
  // build the triangle up
  for(let i = 1; i<height; i+=2)
    console.log(" ".repeat((height-i)/2) + character.repeat(i))

  // middle layer
  console.log(character.repeat(height))

  // going down!
  for(let i = height-2; i>0; i-=2)
    console.log(" ".repeat((height-i)/2) + character.repeat(i))
}

function printTriangle (height, character) {
let line = "";
  for (let i = 0; i < height; i++) {
    line += character
    console.log(line)
  }
}

printDiamond(1, "*")
printDiamond(3, "*")
printDiamond(11, "*")
printTriangle(1, "*")
printTriangle(3, "*")
printTriangle(5, "*")
printSquare(1,"*")
printSquare(3,"*")
printSquare(5,"*")
