// import intern object
const Intern = require('../lib/Intern');

// intern has all the properties of employee plus school so we only need to test for school
test('test if intern has school property', () => {
    const intern = new Intern('Ann', 311, 'ann@work.com', 'The Ohio State University');
 
    expect(intern.school).toEqual(expect.any(String));
});

// get interns school
test('test if getSchool returns intern school', () => {
    const intern = new Intern('Ann', 311, 'ann@work.com', 'The Ohio State University');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// get interns role
test('test if getRole returns "intern"', () => {
    const intern = new Intern('Ann', 311, 'ann@work.com', 'The Ohio State University');

    expect(intern.getRole()).toEqual('Intern');
});