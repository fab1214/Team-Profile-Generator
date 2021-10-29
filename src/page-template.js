//create manager card html
const generateManager = function(manager) {
    return `
    <h1>${manager.name}</h1>
    <p>Employee ID: ${manager.id}</p>
    <p>Employee Email: ${manager.email}</p>
    <p>Office Number: ${manager.officeNumber}</p>
    `;
}
//create engineer card html
const generateEngineer = function(engineer) {
    return `
    <h1>${engineer.name}</h1>
    <p>Employee ID: ${engineer.id}</p>
    <p>Employee Email: ${engineer.email}</p>
    <p>GitHub ${engineer.github}</p>
    `;
}
//create intern card html
const generateIntern = function(intern) {
    return `
    <h1>${intern.name}</h1>
    <p>Employee ID: ${intern.id}</p>
    <p>Employee Email ${intern.email}</p>
    <p>School: ${intern.school}</p>
    `;
};


//create function to generate employee cards from teamArray
const generateCards = (teamArray) => {
    const html = [];
    //create new array with manager info
    html.push(teamArray
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    //create new array with engineer info
    html.push(teamArray
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
    );
    //create new array with intern info
    html.push(teamArray
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
    );

    //return and join all arrays in html
    return html.join("");
};

//add rest of html and join employee cards from above function generateCards()
const generatePage = teamData => {
    return `
    <!DOCTYPE html> 
        <html lang="en"> 

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Portfolio Generator</title>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'>
            <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
        </head>
    
        <body>
            ${generateCards(teamData)}
    
    
    `
};

module.exports=generatePage;