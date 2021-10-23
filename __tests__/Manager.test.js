const Manager = require('../lib/Manager');
//test Manager object
test('creates a manager object', () => {
    const manager = new Manager('Louie', 789, 'louie@gmail.com', 2);

    expect(manager.officeNumber).toEqual(expect.any(Number));

});

test('gets employee role', () => {
    const manager = new Manager('Louie', 789, 'louie@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});