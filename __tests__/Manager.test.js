const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');

test('create a manager object', () => {
    const manager = new Manager('Latoya', 0, "lmdw13@yahoo.com", 202);
   
    expect(manager.officeNumber).toEqual(expect.any(Number));
  
});

test("Can set office number via constructor argument", () => {
    const testValue = 202;
    const manager = new Manager("Foo", 1, "lmdw13@yahoo.com", testValue);
    expect(manager.officeNumber).toBe(testValue);
});
  
test("getRole() should return 'Manager'", () => {
    const testValue = "Manager";
    const manager = new Manager('Latoya', 5, 'lmdw13@yahoo.com',202);
    expect(manager.getRole()).toBe(testValue);
});
  