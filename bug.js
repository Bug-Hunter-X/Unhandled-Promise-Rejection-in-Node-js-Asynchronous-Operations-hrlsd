```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle zero values
  }
  return a / b; // Potential division by zero error
}

console.log(myFunction(10, 0)); // Throws an error
```