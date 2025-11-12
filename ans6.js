// Global counter variable
let count = 0;

// Function to increase counter
function increment() {
  count++;
  console.log(`Count after increment: ${count}`);

  // Nested function to demonstrate function scope
  function logInner() {
    console.log(`(Inner Log) Current Count: ${count}`);
  }

  logInner();
}

// Function to decrease counter
function decrement() {
  count--;
  console.log(`Count after decrement: ${count}`);
}

// Simulate "clicks" by manually calling functions
increment();
increment();
decrement();
increment();
