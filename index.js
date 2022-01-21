// required modules
const fs = require('fs');
const inquirer = require('inquirer');

// import employee profiles
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// import generate html
const generateHTML = require('./src/generateHTML');

// array to stor team members
const employeeArray = [];

// add a manager employee function
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter manager's name: ",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID: ",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if(valid) {
                    return true;
                } else {
                    console.log("Please enter the manager's email.")
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Please enter the manager's office number",
            validate: officeInput => {
                if  (isNaN(officeInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerData => {
        const  { name, id, email, office} = managerData; 
        const manager = new Manager (name, id, email, office);

        employeeArray.push(manager); 
        console.log(manager); 
    })
};

// add other employees function
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What type of employee are you adding?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter employee's name.",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter employee's name.");
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter employee's ID.",
            validate: idInput => {
                if(isNaN(idInput)) {
                    console.log("Please enter the employee's ID.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github username.",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's github username.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school.",
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school.");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add more employees?',
            default: false
        }
    ])
    .then(employeeData => {
        let {name, id, email, role, github, school, confirmAdd} = employeeData;
        let employee;

        if(role === 'Engineer') {
            employee = new Engineer(name,id,email,github);
            console.log(employee);
        }
        else if(role === 'Intern') {
            employee = new Intern(name,id,email,school);
            console.log(employee);
        }

        employeeArray.push(employee);

        if(confirmAdd) {
            return addEmployee(employeeArray);
        } else {
            return employeeArray;
        }
    })
};

const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                reject (err);
                return;
            } else {
                resolve({
                    ok: true,
                    message: console.log('Team succesfully generated in Dist folder')
                })
            }
        })
    })
}

addManager()
  .then(addEmployee)
  .then(employeeArray => {
    return generateHTML(employeeArray);
  })
  .then(pageHTML => {
    return writeToFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });