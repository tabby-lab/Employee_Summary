// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

//grabbing the employee constructor into manager constructor
var Employee=require("./Employee")


class Manager extends  Employee{
    constructor(name,id,email,officeNumber){
        //super piggybacks off of employee
          super(name,id,email)
        this.officeNumber=officeNumber
        // officeNumber

        // getRole() // Overridden to return 'Manager'


    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return "Manager"
    }
}
module.exports=Manager