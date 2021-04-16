const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeesArr = [];

function initApp() {
    createHtml();
    addEmployeeInfo();
}

function makeManager () {
    inquirer.prompt([
        {
            type:'input',
            name: "name",
            message: "Enter manager's name",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter employee name!');
                    return false;
                }
            }

        },
        {
            type:'input',
            name:'id',
            message: "Enter manager's employee id",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter employee id!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message:"Enter manager's email",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log("Please enter employee's email!");
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'office',
            message:"Enter manager's office number",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter office number!');
                    return false;
                }
            }
        }

    ])
    .then( results =>{
        const newManager = new Manager(results.name, results.id, results.email, results.office);
        employeesArr.push(newManager);
        makeTeam();
    })

};

function makeEngineer () {
    inquirer.prompt([
        {
            type:'input',
            name: "name",
            message: "Enter engineer's name",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter employee name!');
                    return false;
                }
            }

        },
        {
            type:'input',
            name:'id',
            message: "Enter engineer's employee id",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter employee id!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message:"Enter engineer's email",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log("Please enter employee's email!");
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'github',
            message:"Enter engineer's github username",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter github username!');
                    return false;
                }
            }
        }

    ])
    .then(results=>{
        const newEngineer = new Engineer(results.name, results.id, results.email, results.username);
        employeesArr.push(newEngineer);
        makeTeam();
    })

}

function makeIntern () {
    inquirer.prompt([
        {
            type:'input',
            name: "name",
            message: "Enter inter's name",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter employee name!');
                    return false;
                }
            }

        },
        {
            type:'input',
            name:'id',
            message: "Enter intern's employee id",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter employee id!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message:"Enter intern's email",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log("Please enter employee's email!");
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'school',
            message:"Enter intern's school",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter school!');
                    return false;
                }
            }
        }

    ])
    then(results=>{
        const newIntern = new Intern(results.name, results.id, results.email, results.school);
        employeesArr.push(newIntern);
        makeTeam();
    }) 

}

function makeTeam() {
    inquirer.prompt([
        {
            type:'list',
            name: "employeeType",
            message: "What type of employee would you like to add?",
            choices:["Manager", "Engineer", "Intern", "Done adding"]
            

        }
        
    ]) 
    .then(selection => {
        switch(selection.employeeType){
            case "Manager":
              makeManager();
            break;
            case "Engineer":
              makeEngineer();
            break;
            case "Intern":
              makeIntern();
            break;
            default:
              makeChart();
        }
       
    });

}

function makeChart () {
    fs.writeFile(data , render(EmployeesArr), err => {
        if (err) throw err
        console.log('File generated!')
    })
}
