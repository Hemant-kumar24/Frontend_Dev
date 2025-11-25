class User {
    constructor(name, rating) {
        this.name = name
        this.rating = rating
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating)
        this.vehicle = vehicle
    }
}

class Trip {
    constructor(a, b, d) {
        this.fromLocation = a
        this.toLocation = b
        this.distance = d
    }
    calculateFare() {
        if (this.distance <= 0 || this.distance == undefined) throw "Invalid Distance"
        return this.distance * 10
    }
}

let t = new Trip("A", "B", 12)
let t2 = new Trip("A", "C", -5)

try {
    console.log(t.calculateFare())
} catch (e) {
    console.log("Error", e)
}

try {
    console.log(t2.calculateFare())
} catch (e) {
    console.log("Error", e)
}
