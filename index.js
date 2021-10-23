const fs = require("fs");
const inquirer = require("inquirer");

//User prompt function for manager input
const promptUser = () => {
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
      message: "Please enter the manager ID:",
      name: "id",
      validate: (idInput) => {
        if (isNaN(idInput) || (idInput === '')){
          console.log("Please enter the manager ID.");
          return false;
        } else {
          return true;
        }
      },
    },

    //manager email
    {
      type: "input",
      message: "What is the manager's email address?",
      name: "email",
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
        if (isNaN(officeInput) || (officeInput === '')){
          console.log("Please enter an office number.");
          return false;
        } else {
          return true;
        }
      },
    },
  ]);
};

//run function promptUser
promptUser();
