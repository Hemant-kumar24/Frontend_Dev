let product = " wireless headphones PRO ";

// Step 1: Trim spaces
let cleanProduct = product.trim().toLowerCase();

// Step 2: Capitalize each word
cleanProduct = cleanProduct
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// Step 3: Replace "Pro" with "Pro Edition"
cleanProduct = cleanProduct.replace("Pro", "Pro Edition");

console.log("Cleaned Title:", cleanProduct);
console.log("Title Length:", cleanProduct.length);
