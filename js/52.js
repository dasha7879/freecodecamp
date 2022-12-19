//Global Scope and Functions
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  oopsGlobal = 5; // Assign 5 to oopsGlobal Here

}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}