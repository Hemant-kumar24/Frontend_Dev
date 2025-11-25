function Product(name, price) {
    this.name = name
    this.price = price
}

Product.prototype.applyDiscount = function (p) {
    return this.price - (this.price * p / 100)
}

let p1 = new Product("Phone", 20000)
let p2 = new Product("Laptop", 50000)
let p3 = new Product("TV", 30000)

console.log(p1.applyDiscount(10))
console.log(p2.applyDiscount(20))
console.log(p3.applyDiscount(5))
