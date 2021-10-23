class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //return Employee name
    getName(){
        return this.name;
    }
    //return employee ID
    getID(){
        return this.id;
    }
    //return employee email
    getEmail(){
        return this.email;
    }
    //return employee role
    getRole(){
        return 'Employee';
    }
};

//extend Employee class to other classes
module.exports = Employee;