// Global variable
let bonus = 5000;

function calculateSalary() {
  // Local variables
  let salary = 40000;
  let isPermanent = true; // Change this to false to test

  // Add bonus only if employee is permanent
  if (isPermanent) {
    salary += bonus;
  }

  console.log(`Total Salary: ₹${salary}`);
  console.log(`Global Bonus Still: ₹${bonus}`); // Global unaffected
}

calculateSalary();
