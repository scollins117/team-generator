// import manager object
const Manager = require('../lib/Manager');

// manager has all the properties of employee plus office so we only need to test for office
test('test if manager has office property', () => {
    const manager = new Manager('Sue', 73, 'sue@work.com', 22);
 
    expect(manager.office).toEqual(expect.any(Number));
});

// get managers office
test('test if getOffice returns managers office', () => {
    const manager = new Manager('Sue', 73, 'sue@work.com', 22);

    expect(manager.getOffice()).toEqual(expect.any(Number));
});

// get managers role
test('test if getRole returns "manager"', () => {
    const manager = new Manager('Sue', 73, 'sue@work.com', 22);

    expect(manager.getRole()).toEqual('Manager');
});