//create manager card html
const generateManager = manager => {
    return `
    <div class="column is-one-third">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                      ${manager.name}
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                      <p>Role: Manager</p>
                      <p>Employee ID: ${manager.id}</p>
                      <p>Employee Email: ${manager.email}</p>
                      <p>Office Number: ${manager.id}</p>
                    </div>
                </div>
            </div>
    </div>
    `;
}
//create engineer card html
const generateEngineer = engineer => {
    return `
    <div class="column is-one-third">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                      ${engineer.name}
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                      <p>Role: Engineer</p>
                      <p>Employee ID: ${engineer.id}</p>
                      <p>Employee Email: ${engineer.email}</p>
                      <p>GitHub: ${engineer.github}</p>
                    </div>
                </div>
            </div>
    </div>
    `;
}
//create intern card html
const generateIntern = intern => {
    return `
    <div class="column is-one-third">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                      ${intern.name}
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                      <p>Role: Intern</p>
                      <p>Employee ID: ${intern.id}</p>
                      <p>Employee Email: ${intern.email}</p>
                      <p>School: ${intern.school}</p>
                    </div>
                </div>
            </div>
    </div>
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
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            <link rel="stylesheet" href="style.css">
        </head>
    
        <body>
        <div class="container">
        <header class="box has-background-danger-dark">
            <div class="columns">
                <div class="title column is-12">
                    <p class=has-text-white style="text-align:center">My Team</p>
                </div>
            </div>
        </header>

        <div class="columns">
        ${generateCards(teamData)}
        </div>
        </body>
        </html>
    `
};

module.exports=generatePage;