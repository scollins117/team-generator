// create employee object
class Employee {
    // employee object constructor
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // get employees name
    getName () {
        return this.name;
    }

    // get employees id
    getId () {
        return this.id;
    }   

    // get employees email
    getEmail () {
        return this.email;
    }

    // get empployees role
    getRole () {
        return 'Employee'; 
    }
};

// export employee object
module.exports = Employee;
