const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeesArr = [];
let newEngineer;
let newIntern;
let newManager;

//function to start app
function initApp() {
    makeTeam();
    createHtml();
}

//function prompt for manager
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
            type:'number',
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
            type:'number',
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
        addHtml(newManager);
        makeTeam();
    })

};

//function prompt for engineer
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
            type:'number',
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
         newEngineer = new Engineer(results.name, results.id, results.email, results.github);
        employeesArr.push(newEngineer);
        addHtml(newEngineer);
        makeTeam();
    })

}

//function prompt for intern
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
            type:'number',
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
    .then(results=>{
        const newIntern = new Intern(results.name, results.id, results.email, results.school);
        employeesArr.push(newIntern);
        addHtml(newIntern);
        makeTeam();
    }) 

}
//function to prompt manager or hr
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
            case "Done adding":
                finishHtml();
            break;
            default:
              finishHtml();
              
        }
       
    });

}

//create intial HTML
function createHtml() {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-secondary mb-5 py-4">
            <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./dist/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

//html to append based on employee type
function addHtml(employeeType) {
    return new Promise(function(resolve, reject) {
        let data = "";
        
        if (employeeType.github) {
             data =  `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 18rem">
                <div class="card-header bg-info">
                    <h2 class="card-title">${employeeType.name}</h2>
                    <h3 class="card-title"><i class="fas fa-laptop-code"></i> ${employeeType.getRole()}</h2>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employeeType.id}</li>
                    <li class="list-group-item">Email Address: ${employeeType.email}</li>
                    <li class="list-group-item">GitHub: ${employeeType.github}</li>
                </ul>
            </div>
        </div>`;
            console.log("adding team member");
            fs.appendFile("./dist/team.html", data, function (err) {
                if (err) {
                    return reject (err);
                }
                console.log('created');
                return resolve();
            });
        } 
        else if (employeeType.school) {
            data = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 18rem">
                <d iv class="card-header bg-info">
                    <h2 class="card-title">${employeeType.name}</h2>
                    <h3 class="card-title"><i class="fas fa-user-graduate"></i> ${employeeType.getRole()}</h2>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employeeType.id}</li>
                    <li class="list-group-item">Email Address: ${employeeType.email}</li>
                    <li class="list-group-item">School: ${employeeType.school}</li>
                </ul>
            </div>
        </div>`;
            console.log("adding team member");
            fs.appendFile("./dist/team.html", data, function (err) {
                if (err) {
                    return reject (err);
                };
                console.log('created');
                return resolve();
            });
        } else {
            data = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 18rem">
                <div class="card-header bg-info ">
                    <h2 class="card-title">  ${employeeType.name}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot"></i> ${employeeType.getRole()}</h2>
                </div
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employeeType.id}</li>
                    <li class="list-group-item">Email Address: ${employeeType.email}</li>
                    <li class="list-group-item">Office Number: ${employeeType.office}</li>
                </ul>
            </div>
        </div>`;
            console.log("adding team member");
            fs.appendFile("./dist/team.html", data, function (err) {
                if (err) {
                    return reject (err);
                };
                console.log('created');
                return resolve();
            });
        }  
    });

}

//finish HTML
function finishHtml() {
    const html = `
    </div>
    </div>
    
</body>
<script src="https://kit.fontawesome.com/c502137733.js"></script>
</html>`;

    fs.appendFile("./dist/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

//start app
initApp();