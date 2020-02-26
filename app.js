//Creating variables for each employee and using require method to import data for the library
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//This id is the id number for employee...start at 1 bc we will ++ later..
let id=1
//Empty array for the employees
let allEmployees=[]

//This manHtml is grabbing all the js files for the employees and rendering them into html
const mainHtml=require("./templates/main")
const engineerHtml=require("./templates/engineer")
const internHtml=require("./templates/intern")
const managerHtml=require("./templates/manager")
let html=""

//Create ask question func to ask all questions for employees
function askQuestion() {
    inquirer.prompt({
        type: "list",
        message: "What do you want to do?",
        choices: ["add manager", "add engineer", "add intern","quit"],
        name: "addEmployee"

        //Using all inputs a user puts in and calling
        //The SWITCH function compares one value against a list of values, and returns a result corresponding to the first match. SWITCH takes an optional default value which is used when no match is found.
        //break makes sure its not returnng and going to the NEXT question
        //return means the app ends
    }).then(function (input) {
        switch (input.addEmployee) {
            case "add manager":
                addManager()
                break
            case "add engineer":
                addEngineer()
                break
            case "add intern":
                addIntern()
                break
            case "quit":
                makeHtml()
                    return
        }
    })
}
function makeHtml(){
    let finalhtml=mainHtml(html)
    fs.writeFile("./index.html",finalhtml,function(error){})
}

//Create func for manager
//Inquire means that it's taking the users info and giving it to the server
//This is a "prompt" and what you need to ask your employee a question
       //type:"input",
       //message: "What is your name?",
       //name: "employeeName"
 //Do the same for each employee...      

function addManager() {
   inquirer.prompt([{
       type:"input",
       message: "What is your name?",
       name: "employeeName"

   },{
       type:"input",
       message:"What is you email?",
       name:"employeeEmail"
   },{
       type:"input",
       message:"What is your office number?",
       name:"employeeOffice"
       //Use .then function for all the inputs
   }]).then(function(input){
       //You ALWAYS need a "new" for a constructor..
       //Then you need to reference all your inputs and push "manager" to allEmployees
       let manager=new Manager(input.employeeName,id++,input.employeeEmail,input.employeeOffice)
       allEmployees.push(manager)
        
        for (let index = 0; index < allEmployees.length; index++) {
             
               if (allEmployees[index].getRole()==="Manager"){
                   html=html+managerHtml(allEmployees[index])
               }
            
        }
       console.log(allEmployees)
       console.log(html)
       askQuestion();
   })
}

function addEngineer(){
 inquirer.prompt([{
     type:"input",
     message:"What is your name?",
     name:"employeeName"
 },{
     type:"input",
     message:"What is your email?",
     name:"employeeEmail"
 },{
     type:"input",
     message:"What is your Github?",
     name:"employeeGithub"
 }]).then(function(input){
     let engineer= new Engineer(input.employeeName,id++,input.employeeEmail,input.employeeGithub)
     allEmployees.push(engineer)

     for (let index = 0; index < allEmployees.length; index++) {
             
        if (allEmployees[index].getRole()==="Engineer"){
            html=html+engineerHtml(allEmployees[index])
        }
     
 }

     console.log(allEmployees)
     console.log(html)
     askQuestion();
 })
}

function addIntern(){
inquirer.prompt([{
    type:"input",
    message:"What is your name?",
    name:"employeeName"
},{
    type:"input",
    message:"What is your email?",
    name:"employeeEmail"
},{
    type:"input",
    message:"What is your school?",
    name:"employeeSchool"
}]).then(function(input){
    let intern= new Intern(input.employeeName,id++,input.employeeEmail,input.employeeSchool)
    allEmployees.push(intern)

    for (let index = 0; index < allEmployees.length; index++) {
             
        if (allEmployees[index].getRole()==="Intern"){
            html=html+internHtml(allEmployees[index])
        }
     
 }

    console.log(allEmployees)
    console.log(html)
    askQuestion();
})

}
askQuestion();

//*********************HOMEWORK INSTRUCTIONS***************************************
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
