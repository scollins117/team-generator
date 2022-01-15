const Employee = require('../lib/Employee');

// get employee name
test('creates an employee object', () => {
    const employee = new Employee('Dave', 117, 'dave@work.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// get employees name
test('gets employees name', () => {
    const employee = new Employee('Dave', 117, 'dave@work.com');

    expect(employee.getName()).toBe('Dave');
});

// get employee id
test('gets employees id', () => {
    const employee = new Employee('Dave', 117, 'dave@work.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employees email', () => {
    const employee = new Employee('Dave', 117, 'dave@work.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('get employees role', () => {
    const employee = new Employee('Dave', 117, 'dave@work.com');

    expect(employee.getRole()).toBe('Employee');
});
