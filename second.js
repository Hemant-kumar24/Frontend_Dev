let menu = {
    pizza: 200,
    burger: 100,
    coffee: 80
}

function calculateBill(orderItems) {
    try {
        let prices = orderItems.map(i => {
            if (!menu[i]) throw "Invalid Item"
            return menu[i]
        })
        let total = prices.reduce((a, b) => a + b, 0)
        console.log("Total:", total)
    } catch (e) {
        console.log("Error:", e)
    }
}

calculateBill(["pizza", "coffee"])
calculateBill(["pizza", "noodles"])
