import assert from 'assert';

Feature('login');

Scenario('test login', ({ I }) => {
    I.fillField('CompanyAlias','')
    I.fillField('Username','')
    I.fillField('Password','')
    I.click('Login')
});
