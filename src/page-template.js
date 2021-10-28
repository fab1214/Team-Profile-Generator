//create manager card
const generateManager = function(manager) {
    return `
    <h1>${manager.name}</h1>
    <p>${manager.id}</p>
    <p>${manager.email}</p>
    <p>${manager.officeNumber}</p>
    `;
}
//create engineer card
const generateEngineer = function(engineer) {
    return `
    <h1>${engineer.name}</h1>
    <p>${engineer.id}</p>
    <p>${engineer.email}</p>
    <p>${engineer.github}</p>
    `;
}
//create intern card
const generateIntern = function(intern) {
    return `
    <h1>${intern.name}</h1>
    <p>${intern.id}</p>
    <p>${intern.email}</p>
    <p>${intern.school}</p>
    `;
};





// module.exports=generatePage;