const Employee = require('../lib/Employee.js');

test ('create an employee object' , () => {
    const employee = new Employee ('Latoya', 0, "lmdw13@yahoo.com");

    expect(employee.name).toBe('Latoya');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get employees name', () => {
    const testValue = 'Latoya'
    const employee = new Employee (testValue);

    expect(employee.getName()).toBe(testValue);
});

test('get employees id', () => {
    const testValue = 5;
    const employee = new Employee ('Latoya', testValue, 'lmdw13@yahoo.com');
    expect(employee.getId()).toBe(testValue);
});

test('get employees email', () => {
    const testValue = 'lmdw13@yahoo.com'; 
    const employee = new Employee ('Latoya', 0, testValue);
    expect(employee.getEmail()).toBe(testValue);
});

test("getRole() should return 'Employee'", () => {
    const testValue = "Employee";
    const employee = new Employee('Latoya', 1, "test@test.com");
    expect(employee.getRole()).toBe(testValue);
  });