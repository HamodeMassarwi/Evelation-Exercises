class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}
class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}
class Teacher extends Person {
    constructor(name, startYear, Salary) {
        super(name, startYear)
        this.Salary = Salary;
    }
    addCourse(course) {
        if (this.courses.indexOf(course) == -1) {
            this.courses.push(course)
        }
    }
    giveGrade(student, courseName, grade) {
        student.receiveGrade(courseName, grade)
    }
}
