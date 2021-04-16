const Intern = require('../lib/Intern.js');
const Employee = require('../lib/Employee.js');


test('create an intern object', () => {
    const intern = new Intern('Latoya', 0, 'lmdw13@yahoo.com', 'UCLA');
   
    expect(intern.school).toEqual(expect.any(String));
  
});

test("getSchool should return a school name", () => {
    const testValue = 'UCLA';
    const intern = new Intern('Latoya', 1, 'lmdw13@yahoo.com', testValue);
    expect(intern.getSchool()).toBe(testValue);
});
  
test("getRole() should return 'Intern'", () => {
    const testValue = "Intern";
    const intern = new Intern('Latoya', 5, 'lmdw13@yahoo.com','UCLA');
    expect(intern.getRole()).toBe(testValue);
});
  