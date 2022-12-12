//Stand in Line
function nextInLine(arr, item) {
    arr.push(item);
    item = arr.shift()
    // Only change code below this line
    return item;
    
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));