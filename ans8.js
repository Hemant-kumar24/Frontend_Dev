const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

let discountedCart = cart.map(product => {
  let discount = 0;

  if (product.category === "electronics") discount = 0.10;
  else if (product.category === "fashion") discount = 0.05;

  let finalPrice = product.price - (product.price * discount);
  return { ...product, finalPrice };
});

// Calculate total after category discounts
let total = discountedCart.reduce((sum, item) => sum + item.finalPrice, 0);

// Apply extra 5% discount if total > 50000
if (total > 50000) {
  total = total - (total * 0.05);
}

console.log("Cart Summary After Discounts:");
discountedCart.forEach(p => {
  console.log(`${p.item} (${p.category}) → ₹${p.finalPrice.toFixed(2)}`);
});
console.log(`Final Cart Total: ₹${total.toFixed(2)}`);
