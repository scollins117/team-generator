// import employee object
const Employee = require('./Employee');

// create intern object
class Intern extends Employee {
    // intern constructor builds off employee
    constructor(name, id, email, school) {
        super (name, id, email);

        this.school = school;
    }

    // get interns school
    getSchool () {
        return this.school;
    }

    // return role of intern
    getRole () {
        return 'Intern';
    }
}

// export intern object
module.exports = Intern;