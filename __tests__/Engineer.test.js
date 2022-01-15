// import engineer object
const Engineer = require('../lib/Engineer');

// engineer has all the properties of employee plus github so we only need to test for github
test('test if engineer has github property', () => {
    const engineer = new Engineer('Pat', 237, 'pat@work.com', 'patman12');
 
    expect(engineer.github).toEqual(expect.any(String));
});

// get engineers github
test('test if getGithub return github username', () => {
    const engineer = new Engineer('Pat', 237, 'pat@work.com', 'patman12');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// get engineers role
test('test if getRole returns "engineer"', () => {
    const engineer = new Engineer('Pat', 237, 'pat@work.com', 'patman12');

    expect(engineer.getRole()).toEqual('Engineer');
});
