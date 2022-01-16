// import employee object
const Employee = require('./Employee');

// create manager object
class Manager extends Employee {
    // manager constructor builds off employee
    constructor(name, id, email, office) {
        super (name, id, email);

        this.office = office;
    }

    // get managers office
    getOffice () {
        return this.office;
    }

    // return role of manager
    getRole () {
        return 'Manager';
    }
}

// export intern object
module.exports = Manager;