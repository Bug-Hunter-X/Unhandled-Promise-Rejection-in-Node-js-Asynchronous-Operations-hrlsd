```javascript
async function myFunction(a, b) {
  try {
    if (a === 0 || b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  } catch (error) {
    console.error('Error:', error.message); 
    return 0; // Or handle the error as needed
  }
}

myFunction(10, 0).then(result => {
  console.log("Result:", result);
});
```