// TODO: Write code to define and export the Employee class
//methods=functions in an object
//properties=variables in an object
//purpose=group methods and properties into an object so you can store data into an object
//constructor=reuse same object structure in a func or class
//es5 deals with func and es6 deals with classes to define the constructor

class Employee{
    constructor(name,id,email){
       this.name=name 
       this.id=id
       this.email=email

//         name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'
    }
    getName(){
       return this.name 
    }
    getEmail(){
        return this.email
    }
    getId(){
        return this.id
    }
    getRole(){
        return "Employee"
    }
}
module.exports=Employee