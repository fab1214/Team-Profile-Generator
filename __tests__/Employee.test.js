const Employee = require('../lib/Employee');
//test employee object
test('creates an employee object', () => {
    const employee = new Employee('Fab', 123, 'fbustamante@gmail.com');

    expect(employee.name).toBe('Fab');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

test('gets employee name', () => {
    const employee = new Employee('Fab', 123, 'fbustamante@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('Fab', 123, 'fbustamante@gmail.com');

    expect(employee.getID()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Fab', 123, 'fbustamante@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employee role', () => {
    const employee = new Employee('Fab', 123, 'fbustamante@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});