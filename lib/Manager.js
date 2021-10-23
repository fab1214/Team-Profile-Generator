const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        //identify properties inherited by Employee class
        super(name, id, email);

        this.officeNumber = officeNumber
    }

    //override employee role with manager
    getRole(){
        return 'Manager';
    }

}

module.exports = Manager;