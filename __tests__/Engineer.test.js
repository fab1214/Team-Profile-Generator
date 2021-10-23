const Engineer = require('../lib/Engineer');
//test Manager object
test('creates an engineer object', () => {
    const engineer = new Engineer('Julia', 456, 'julia@gmail.com', 'jsotomayor');

    expect(engineer.github).toEqual(expect.any(String));
});

test('get github name', () => {
    const engineer = new Engineer('Julia', 456, 'julia@gmail.com', 'jsotomayor');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets employee role', () => {
    const engineer = new Engineer('Julia', 456, 'julia@gmail.com', 'jsotomayor');

    expect(engineer.getRole()).toEqual("Engineer");
});