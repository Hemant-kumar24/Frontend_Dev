class Employee {
    constructor(name, dept) {
        this.name = name
        this.dept = dept
    }
    work() {
        return this.name + " doing normal work"
    }
}

class Manager extends Employee {
    work() {
        return this.name + " managing team"
    }
}

let e = new Employee("Ram", "Sales")
let m = new Manager("Shyam", "IT")

function showWork(x) {
    console.log(x.work())
}

showWork(e)
showWork(m)
