//create manager card html
const generateManager = manager => {
    return `
    <div class="column is-4">
            <div class="card">
                <header class="card-header">
                    <div class="card-header-title has-background-info">
                      <p class=has-text-white>${manager.name}
                      <br />
                      <span class="oi oi-person"></span>Manager
                    </p>
                    </div>
                </header>
                <div class="card-content">
                    <div class="content">
                      <p>Employee ID: ${manager.id}</p>
                      <p>Employee Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
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
    <div class="column is-4">
            <div class="card">
                <header class="card-header">
                    <div class="card-header-title has-background-info">
                      <p class=has-text-white>${engineer.name}
                      <br />
                      <span class="oi oi-code"></span>Engineer
                      </p>
                    </div>
                </header>
                <div class="card-content">
                    <div class="content">
                      <p>Employee ID: ${engineer.id}</p>
                      <p>Employee Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                      <p>GitHub: <a href="www.github.com/${engineer.github}">${engineer.github}</a></p>
                    </div>
                </div>
            </div>
    </div>
    `;
}
//create intern card html
const generateIntern = intern => {
    return `
    <div class="column is-4">
            <div class="card">
                <header class="card-header">
                    <div class="card-header-title has-background-info">
                      <p class=has-text-white>${intern.name}
                      <br />
                      <span class="oi oi-book"></span>Intern
                      </p>
                </header>
                <div class="card-content">
                    <div class="content">
                      <p>Employee ID: ${intern.id}</p>
                      <p>Employee Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
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
    //push manager data to html array
    html.push(teamArray
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    //push engineer data to html array
    html.push(teamArray
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
    );
    //push intern data to html array
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
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

            <div class="columns is-flex-wrap-wrap">
                ${generateCards(teamData)}
            </div>
        </div>
        </body>
        </html>
    `
};

module.exports=generatePage;