// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// github // GitHub username




//Need to create a variable for Employee....Use "Require" 
var Employee=require("./Employee")

//Create a new class called engineer that EXTENDS to Employee
class Engineer extends Employee{
    //constructor is the same as employee plus a github..
    constructor(name,id,email,github){
        //super means the main parent which is "Employee" and it's original constructor..
        super(name,id,email)
        //With Engineer you only add the github..
        this.github=github
    }
    
// getGithub()
// getRole() // Overridden to return 'Engineer'
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}
module.exports=Engineer