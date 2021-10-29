const fs = require("fs");
const inquirer = require("inquirer");
const { writeFile } = require("./utils/generate-site");
const generatePage = require("./src/page-template");
// team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//array to hold team data
const teamData = [];

//User prompt function for manager input
const addManager = () => {
  return inquirer
    .prompt([
      //manager name
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name");
            return false;
          }
        },
      },

      //manager ID
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID.",
        validate: (idInput) => {
          if (isNaN(idInput) || idInput === "") {
            console.log("Please enter the employee's ID.");
            return false;
          } else {
            return true;
          }
        },
      },

      //employee email
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
        validate: (emailInput) => {
          // Regex mail check (return true if valid mail)
          return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            emailInput
          );
        },
      },

      //manager office number
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: (officeInput) => {
          if (isNaN(officeInput) || officeInput === "") {
            console.log("Please enter an office number.");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerData) => {
      //define manager name, id, email, officeNumber
      let { name, id, email, officeNumber } = managerData;
      //create manager object
      const manager = new Manager(name, id, email, officeNumber);
      //oush manager data to teamData array
      teamData.push(manager);
    });
};
//add employees prompt
const addEmployee = () => {
  console.log(`
==================
Add a New Employee
==================
    `);
  //choose which type of employee they want to add
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Choose the employee type you want to add.",
        choices: ["Engineer", "Intern"],
      },

      //employee name
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's name");
            return false;
          }
        },
      },

      //employee ID
      {
        type: "input",
        name: "id",
        message: "Please enter the employee ID:",
        validate: (idInput) => {
          if (isNaN(idInput) || idInput === "") {
            console.log("Please enter the employee's ID.");
            return false;
          } else {
            return true;
          }
        },
      },

      //employee email
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
        validate: (emailInput) => {
          // Regex mail check (return true if valid mail)
          return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            emailInput
          );
        },
      },

      //engineer github (if engineer is selected)
      {
        type: "input",
        name: "github",
        message: "Please enter the engineer's GitHub username.",
        when: (employee) => employee.role === "Engineer",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter a GitHub username.");
            return false;
          }
        },
      },

      //intern school (if intern is selected)
      {
        type: "input",
        name: "school",
        message: "What school does/did the Intern attend?",
        when: (employee) => employee.role === "Intern",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the school name.");
            return false;
          }
        },
      },

      //add more members to team (engineer, intern)
      {
        type: "confirm",
        name: "confirmAddTeam",
        message: "Would you like to add more members to the team?",
        default: "false",
      },
    ])

    .then((employeeData) => {
      //define data collected for Engineer and Intern role
      let { name, id, email, role, github, school, confirmAddTeam } =
        employeeData;

      //if Engineer is selected, create new engieer object
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        //if Intern  is selected, create new intern object
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
      }
      //push Engineer and/or Intern employee data to teamData array
      teamData.push(employee);

      //if you want to add more team members, call back prompt
      if (confirmAddTeam) {
        return addEmployee(teamData);
        //if not, return teamData array with all objects
      } else {
        return teamData;
      }
    });
};

//run addManager & addEmployee prompts
addManager()
  .then(addEmployee)
  .then((teamData) => {
    return generatePage(teamData);
  })
  .then(pageHTML => {
    console.log("File created!");
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });
