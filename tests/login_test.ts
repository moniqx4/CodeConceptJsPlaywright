import assert from 'assert';

Feature('login', {retries: 3});

// not sure what is wrong with this??
// Before((I: any, employeeDBLogin: any) => {

//     I.amOnPage('/login');
//     employeeDBLogin.sendForm();
//   });

Scenario('test login', ({ I }) => {
    I.fillField('CompanyAlias','')
    I.fillField('Username','')
    I.fillField('Password','')
    I.click('Login')
});
