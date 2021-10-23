const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, email, id);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  //override employee role with intern
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
