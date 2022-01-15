// import employee object
const Employee = require("./Employee");

// create engineer object
class Engineer extends Employee {
    // engineer constructor builds off employee
    constructor(name, id, email, github) {
        super (name, id, email);

        this.github = github;
    }

    // get engineers github
    getGithub () {
        return this.github;
    }

    // return role of engineer
    getRole () {
        return 'Engineer';
    }
}

// export Engineer object
module.exports = Engineer;