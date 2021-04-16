const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee.js');

test('create an engineer object', () => {
    const engineer = new Engineer('Latoya', 0, 'lmdw13@yahoo.com', 'latoyadawson');
   
    expect(engineer.github).toEqual(expect.any(String));
  
});

test("getGitHub() should return your github username", () => {
    const testValue = 'latoyadawson';
    const engineer = new Engineer('Latoya', 1, 'lmdw13@yahoo.com', testValue);
    expect(engineer.getGithub()).toBe(testValue);
});
  
test("getRole() should return 'Engineer'", () => {
    const testValue = "Engineer";
    const engineer = new Engineer('Latoya', 5, 'lmdw13@yahoo.com','latoyadawson');
    expect(engineer.getRole()).toBe(testValue);
});
  