const fs = require("fs");
const inquirer = require("inquirer");

//User prompt function for manager input
const addManager = () => {
  return inquirer.prompt([
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
  ]);
};
//add parameter to store the team data
const addEmployee = (teamData) => {
  //if there is no team data array, create one to store data
  if (!teamData.members) {
    teamData.members = [];
  }
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

    //push collected additional employee data into teamData.members array
    .then((employeeData) => {
      teamData.members.push(employeeData);
      //if you want to add more team members, call back prompt
      if (employeeData.confirmAddTeam) {
        return addEmployee(teamData);
      //if not, return teamData 
      } else {
        return teamData;
      }
    });
};

//run addManager & addEmployee prompts
addManager()
  .then(addEmployee)
  //console log teamData object array
  .then((teamData) => {
    console.log(teamData);
  });
