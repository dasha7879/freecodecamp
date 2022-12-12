//Local Scope and Functions
function myLocalScope() {
    let myVar = 'hi'
   // Only change code below this line
 
   console.log('inside myLocalScope', myVar);
 }
 myLocalScope();
 
 // Run and check the console
 // myVar is not defined outside of myLocalScope
 console.log('outside myLocalScope', myVar);