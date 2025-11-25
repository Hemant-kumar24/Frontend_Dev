class Student {
    constructor(name, marks) {
        this.name = name
        this.marks = marks
    }
    calculateAverage() {
        let a = this.marks.reduce((x, y) => x + y, 0)
        return a / this.marks.length
    }
    grade() {
        let avg = this.calculateAverage()
        if (avg >= 90) return "A"
        else if (avg >= 70) return "B"
        else if (avg >= 50) return "C"
        else return "F"
    }
}

let s1 = new Student("A", [90, 80, 70])
let s2 = new Student("B", [40, 60, 55])
let s3 = new Student("C", [95, 92, 98])

console.log(s1.name, s1.grade())
console.log(s2.name, s2.grade())
console.log(s3.name, s3.grade())
