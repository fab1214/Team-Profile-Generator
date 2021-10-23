const Intern = require('../lib/Intern');
//test employee object
test('creates an intern object', () => {
    const intern = new Intern('Gil', 0, 'gil@gmail.com', 'Rutgers');

    expect(intern.school).toEqual(expect.any(String));
});

test('get school name', () => {
    const intern = new Intern('Gil', 0, 'gil@gmail.com', 'Rutgers');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets employee role', () => {
    const intern = new Intern('Gil', 0, 'gil@gmail.com', 'Rutgers');

    expect(intern.getRole()).toEqual("Intern");
});