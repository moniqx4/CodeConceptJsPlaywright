import assert from 'assert';

Feature('login');

Scenario('test something', ({ I }) => {
    I.fillField('CompanyAlias','100496')
    I.fillField('Username','')
    I.fillField('Password','')
    I.click('Login')
});
